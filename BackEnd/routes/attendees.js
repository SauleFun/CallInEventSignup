const { ObjectId } = require("mongodb");
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

router.get("/one/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    const data = await client
      .db("EventsDatabase")
      .collection("Attendees")
      .findOne({_id: new ObjectId(id)});


    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ message: "No attendee found with that ID" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
});


router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await client
      .db("EventsDatabase")
      .collection("Attendees")
      .deleteOne({_id: new ObjectId(id)});

    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  let data = req.body;

  console.log(data);

  if(!Object.keys(data).length){
    res.status(500).send('No data found');
  }

  if(data['_id']) {
    try {
      const id = data['_id']; // Save the id
      delete data['_id']; // Remove the _id from the data object to avoid conflicts in the update operation

      const db = await client
        .db("EventsDatabase")
        .collection("Attendees")
        .updateOne(
          { _id: new ObjectId(id)}, // Ensure the id is converted to ObjectId
          { $set: data }, // Update operation
          { upsert: true } // Option to insert a new document if one doesn't exist with the provided _id
        );

      if (db.matchedCount === 0) {
        res.status(404).send({ message: "No document found with that ID to update" });
      } else {
        res.send(db);
      }
    } catch (e) {
      console.error("Error updating document:", e);
      res.status(500).send({ error: "Internal Server Error", details: e });
    }
  } else {
    try {
      const db = await client
      .db("EventsDatabase")
      .collection("Attendees")
      .insertOne(data)
    
      res.send(db)
    } catch(e) {
      res.status(500).send({ e });
    }
  }
})


module.exports = router;