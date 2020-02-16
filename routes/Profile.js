express = require('express');
profile = require('../controllers/Profile');
isAuth = require("../middleware/is-auth");

router = express.Router();

router.get("", isAuth, profile.getProfile);

module.exports = router;