const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/health', (req, res) => {
  res.status(200).send('Backend OK');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
