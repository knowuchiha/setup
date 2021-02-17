const express           = require('express');
const router            = express.Router();
const drop              = require ('../controllers/dropDown');

router.get ('/apis/dropDown', drop.getdropDown);

module.exports = router;
