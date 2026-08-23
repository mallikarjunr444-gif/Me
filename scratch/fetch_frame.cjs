const { spawn } = require('child_process');
const fs = require('fs');

const p = spawn('npx', ['-y', 'uxmagic-mcp@1.2.0'], {
  env: { ...process.env, UXMAGIC_API_KEY: 'uxm__9L3f2-R4LcQWMXeF3O-7gw0XC0TatSql10722fGDLM' }
});

let buffer = '';

p.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');
  buffer = lines.pop(); // keep remainder

  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const msg = JSON.parse(line);
      if (msg.id === 1 && msg.result && msg.result.tools) {
        fs.writeFileSync('scratch/uxmagic_tools.json', JSON.stringify(msg.result.tools, null, 2));
        console.log('Available tools:', msg.result.tools.map(t => ({ name: t.name, desc: t.description })));

        // Find frame export tool
        const toolName = msg.result.tools[0].name;
        const callReq = JSON.stringify({
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/call',
          params: {
            name: toolName,
            arguments: {
              frame_id: '6a8ab90858aebcdeb2f18170',
              frameId: '6a8ab90858aebcdeb2f18170',
              id: '6a8ab90858aebcdeb2f18170'
            }
          }
        }) + '\n';
        p.stdin.write(callReq);
      } else if (msg.id === 2) {
        fs.writeFileSync('scratch/frame_6a8ab90858aebcdeb2f18170.json', JSON.stringify(msg.result, null, 2));
        console.log('Frame data saved to scratch/frame_6a8ab90858aebcdeb2f18170.json');
        process.exit(0);
      }
    } catch (e) {}
  }
});

p.stderr.on('data', (d) => {});

const initReq = JSON.stringify({
  jsonrpc: '2.0',
  id: 0,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'antigravity', version: '1.0.0' }
  }
}) + '\n';

p.stdin.write(initReq);

setTimeout(() => {
  p.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} }) + '\n');
}, 1000);

setTimeout(() => {
  console.log('Done or timeout');
  process.exit(0);
}, 8000);
