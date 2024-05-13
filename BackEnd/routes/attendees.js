const express = require("express");
require("dotenv").config();

const router = express.Router();
const client = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const data = await client
      .db("EventsDatabase")
      .collection("Attendees")
      .find()
      .toArray();
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  let data = req.body;

  if(!Object.keys(data).length){
    res.status(500).send('No data found');
  }

  try {
    const db = await client
    .db("EventsDatabase")
    .collection("Attendees")
    .insertOne(data)
  
    res.send(db)
  } catch(e) {
    res.status(500).send({ e });
  }
});

module.exports = router;