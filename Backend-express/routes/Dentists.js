const express = require("express");
const router = express.Router();
const DentistsMongoDBController = require("../controllers/DentistsMongoDBController");
const upload = require('../middlewares/upload');
const authenticate = require('../middlewares/authenticate')


//get request or read

router.get("/", DentistsMongoDBController.getAllDentists );

// Get request parametarized

router.get("/:id", DentistsMongoDBController.getDentist);

// Post Request

router.post("/", 
upload.single('Profile_pic'), 
DentistsMongoDBController.createDentist);

//update


router.put("/", upload.single('Profile_pic'), DentistsMongoDBController.updateDentist);

// delete

router.delete("/",DentistsMongoDBController.deleteDentist);

module.exports = router;