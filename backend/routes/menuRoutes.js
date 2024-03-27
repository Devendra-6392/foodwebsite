const express = require('express')
const { createMenu, getMenu } = require('../controllers/menuController')
const router = express.Router()

router.post('/create',createMenu)
router.get('/get',getMenu)



module.exports = router
