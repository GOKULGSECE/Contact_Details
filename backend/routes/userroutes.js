const express = require('express');
const { registerUser, LoginUser, Currentinfo } = require('../controllers/usercontroller');
const validationtoken = require('../middleware/validationtoken')
const router = express.Router();
router.post("/register",registerUser);
router.post("/login",LoginUser);
router.get("/current",validationtoken,Currentinfo);
module.exports = router;