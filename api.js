const express = require('express');
const routes = require('./routes/index');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.disable('x-powered-by');
app.use(express.json());
app.use('/api', routes);
app.use((req, res) => {
  res.status(404).send('Not found');
}
);

app.listen(PORT, () => console.log(`Server started on port ${PORT} ENV: ${process.env.NODE_ENV}`));
