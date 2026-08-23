const { spawn } = require('child_process');
const fs = require('fs');

const p = spawn('npx', ['-y', 'uxmagic-mcp@1.2.0'], {
  env: { ...process.env, UXMAGIC_API_KEY: 'uxm__9L3f2-R4LcQWMXeF3O-7gw0XC0TatSql10722fGDLM' }
});

let buffer = '';
let step = 0;

p.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');
  buffer = lines.pop();

  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const msg = JSON.parse(line);
      console.log('MSG ID:', msg.id);

      if (msg.id === 0) {
        // initialized, call read_screen
        const callScreen = JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/call',
          params: {
            name: 'read_screen',
            arguments: { frameId: '6a8ab90858aebcdeb2f18170' }
          }
        }) + '\n';
        p.stdin.write(callScreen);
      } else if (msg.id === 1) {
        fs.writeFileSync('scratch/uxmagic_screen.json', JSON.stringify(msg.result, null, 2));
        console.log('Screen HTML saved');
        
        // now call read_theme
        const callTheme = JSON.stringify({
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/call',
          params: {
            name: 'read_theme',
            arguments: { frameId: '6a8ab90858aebcdeb2f18170' }
          }
        }) + '\n';
        p.stdin.write(callTheme);
      } else if (msg.id === 2) {
        fs.writeFileSync('scratch/uxmagic_theme.json', JSON.stringify(msg.result, null, 2));
        console.log('Theme CSS saved');
        process.exit(0);
      }
    } catch (e) {}
  }
});

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
  console.log('Timeout');
  process.exit(0);
}, 10000);
