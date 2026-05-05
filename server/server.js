require('dotenv').config({ path: './server/.env' });

const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/contact');

const app = express();
const port = 3000;
const isProd = process.env.NODE_ENV === 'production';

app.options('/{*path}', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(204);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ANGULAR_DIST = path.join(__dirname, '../dist/final-project/browser');
if (isProd) {
  app.use(express.static(ANGULAR_DIST));
}

app.use('/api', apiRoutes);

if (isProd) {
  app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(ANGULAR_DIST, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend running on localhost:${port}`);
});

module.exports = app;
