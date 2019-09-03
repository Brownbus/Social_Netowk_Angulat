const express = require('express');
const cors = require('cors')

const router = require('./routes/index');

const app = express();
const PORT = 3050;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
	console.log(`Server is running and listening to ${PORT}`)
})


module.exports = app;