import express from "express";
import { boats } from "./models/Boat.js";
const api = express.Router();

api.get("/getAll", (req, res) => {
  boats.find().lean().then((data) => {
    res.json({ success: true, data: data });
  })
  .catch((err) => {
    res.json({ success: false, error: err.message, method: "getAll" })
  })
})

api.get("/getResourceByName/:name", (req, res) => {
  boats.findOne({ name: req.params.name }).lean().then((boat) => {
    if (boat) {
      res.json({ success: true, data: boat});
      return;
    }
    res.status(500).send(err.message);
  }
  )
})

api.get("/getResourceById/:id([0-9]+)", (req, res) => {
  boats.findOne({ id: req.params.id }).lean().then((boat) => {
    if (boat) {
      res.json({ success: true, data: boat});
      return;
    }
    res.json({ success: false, error: "boat not found" });
  }
  )
  .catch((err) => {
    res.status(500).send(err.message);
  });
})

api.get("/deleteResource/:id([0-9]+)", (req, res) => {
  boats.deleteOne({ id: req.params.id }, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.message, method: "boat not found" });
      return;
    }
    if (result.deletedCount == 0) {
      res.json({ success: false, error: "a failure occured on deletion" });
      return;
    }
    res.json({ success: true, message: 'resource deleted' });
  });
});

api.post("/addResource", (req, res) => {
  boats.create(req.body, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.message, method: "addResource" });
      return;
    }
    if (result) {
      res.json({ success: true, message: 'resource added' });
      return;
    }
  })
})

export { api }