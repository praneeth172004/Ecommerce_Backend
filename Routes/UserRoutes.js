const express = require('express');
const router = express.Router();
const { Signup, Login, Logout, GetUser, Contact } = require('../Controllers/UserController');
const { Auth } = require('../Middleware/Auth');

router.post('/signup', Signup);
router.post('/login', Login);
router.get('/logout', Auth, Logout);
router.get('/getuser', Auth, GetUser);
router.post("/contact",Contact)

module.exports = router;
