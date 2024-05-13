const cors = require('cors');
const express = require('express');
require("dotenv").config();

const attendees = require("./routes/attendees");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/attendees', attendees)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});