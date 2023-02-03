const express = require('express') ;
const router = express.Router();
const apiPrefix = '/api';

const iqairRouter = require('../features/iqair/index');


router.use( apiPrefix ,iqairRouter) ;


module.exports = router; 