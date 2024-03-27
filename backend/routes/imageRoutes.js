const express = require("express");
const { createImage, getImage } = require("../controllers/imagesControllers");
const router = express.Router();

router.post('/create',createImage)
router.get('/get',getImage)




module.exports = router