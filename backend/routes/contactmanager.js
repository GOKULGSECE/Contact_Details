const express = require('express');
const router = express.Router();
const {getContacts,getContact,createContacts,putContacts,deleteContact} = require("../controllers/contactcontroller");

router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(putContacts).delete(deleteContact);
module.exports = router;