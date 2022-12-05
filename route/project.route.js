const express = require("express");
const { getAllProject,getProjectDetails } = require("../controllers/project.controller");
const router = express.Router();

router.get("/project", getAllProject);
router.get("/project/:id", getProjectDetails);

// router.post("/project", postAllProject);

module.exports = router;