require('dotenv').config();
const express = require('express')

const router = express.Router();
const app = express();

router.get('/hi', (req, res) => {
    res.send('Hello')
});

app.use(router);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});