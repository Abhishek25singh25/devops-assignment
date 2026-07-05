const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.json({
    message: "DevOps Assignment App is running",
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
