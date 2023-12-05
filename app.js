require('dotenv').config();
const express = require('express');

const router = express.Router();
const app = express();

const consumentRoutes = require('./routes/consument');

app.use(consumentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});