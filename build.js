const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('__SLACK_WEBHOOK_URL__', process.env.SLACK_WEBHOOK_URL || '');
fs.writeFileSync('index.html', html);

console.log('Build complete. SLACK_WEBHOOK_URL injected.');
