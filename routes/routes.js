const express = require("express");

const router = express.Router();

//Post Method
router.post("/post", (req, res) => {
  res.send(`Post API ${req.query}`);
});

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API vmdsmvdlm");
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
