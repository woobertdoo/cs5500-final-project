require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/contact');

const app = express();
const port = 3000;
const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  app.use(cors({ origin: 'http://localhost:4200' }));
}

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
