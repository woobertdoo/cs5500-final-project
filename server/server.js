const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/contact');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Backend running on localhost:${port}`);
});

module.exports = app;
