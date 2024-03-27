const express = require('express');
const { offer, getdata } = require('../controllers/offerController');
const router = express.Router();

router.post('/create', offer)
router.get('/get', getdata)




module.exports = router