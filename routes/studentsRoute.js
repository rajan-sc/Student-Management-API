const express = require("express");
const router = express.Router();

const { addEntries, getAllEntries, getEntryById, updateEntry, deleteEntry } = require("../controller/studentController");

router.post("/add-entries", addEntries);
router.get("/all", getAllEntries);
router.get("/:id", getEntryById);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);

module.exports = router;
