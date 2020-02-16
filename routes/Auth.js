express = require('express');
authController = require('../controllers/Auth');
isNotAuth = require("../middleware/is-not-auth");

router = express.Router();

router.get("/sign-in", isNotAuth, authController.getSignIn);
router.post("/sign-in", isNotAuth, authController.postSignIn);

router.get("/sign-up", isNotAuth, authController.getSignUp);
router.post("/sign-up", isNotAuth, authController.postSignUp);

router.get("/sign-out", authController.getSignOut);
module.exports = router;