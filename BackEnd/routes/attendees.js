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
  console.log(req.body);
  // try {
    // const newPet = {
    //   ...req.body,
    //   ownerId: new ObjectId(`${req.body.ownerId}`),
    // };
  //   const dbRes = await client
  //     .db("demo1")
  //     .collection("coolPets")
  //     .insertOne(newPet);
  //   res.send(dbRes);
  // } catch (err) {
  //   res.status(500).send({ err });
  // }
});

module.exports = router;