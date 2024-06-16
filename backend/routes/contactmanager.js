const express = require('express');
const router = express.Router();
const {getContacts,getContact,createContacts,putContacts,deleteContact} = require("../controllers/contactcontroller");
const validationtoken = require('../middleware/validationtoken');

router.use(validationtoken)
router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(putContacts).delete(deleteContact);
module.exports = router;