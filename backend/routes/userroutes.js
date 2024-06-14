const express = require('express');
const { registerUser, LoginUser, Currentinfo } = require('../controllers/usercontroller');

const router = express.Router();
router.post("/register",registerUser);
router.post("/login",LoginUser);
router.get("/current",Currentinfo);
module.exports = router;