const { spawn } = require('child_process');

const p = spawn('npx', ['-y', 'uxmagic-mcp@1.2.0'], {
  env: { ...process.env, UXMAGIC_API_KEY: 'uxm__9L3f2-R4LcQWMXeF3O-7gw0XC0TatSql10722fGDLM' }
});

let buffer = '';

p.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const msg = JSON.parse(line);
      console.log('RECEIVED MESSAGE:', JSON.stringify(msg, null, 2));
      
      if (msg.id === 1 && msg.result && msg.result.tools) {
        console.log('TOOLS FOUND:', msg.result.tools.map(t => t.name));
        
        // Now call the appropriate tool for frame 6a8ab90858aebcdeb2f18170
        const callReq = JSON.stringify({
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/call',
          params: {
            name: msg.result.tools[0].name,
            arguments: {
              frameId: '6a8ab90858aebcdeb2f18170',
              id: '6a8ab90858aebcdeb2f18170',
              projectId: '6a8ab8d3453c37b628db7bbf'
            }
          }
        }) + '\n';
        p.stdin.write(callReq);
      } else if (msg.id === 2) {
        console.log('FRAME RESULT:', JSON.stringify(msg.result, null, 2));
        process.exit(0);
      }
    } catch (e) {
      // incomplete json chunk
    }
  }
});

p.stderr.on('data', (d) => {
  // console.error(d.toString());
});

// Send tools/list
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
  const req = JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'tools/list',
    params: {}
  }) + '\n';
  p.stdin.write(req);
}, 1000);

setTimeout(() => {
  console.log('Timeout reached');
  process.exit(0);
}, 10000);
