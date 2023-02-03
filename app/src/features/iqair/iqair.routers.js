const express = require('express') ;
const router = express.Router();
const dataResponse = require('../../util/data.response');
const { getAireQuality, getAireQualityByLatLon,mostPolluted } = require('./iqair.controller');
// u can use any validator : for this example I used my custom validator
const validateIQ = require('./iqair.validator');



router.get('/iq' , async (req, res) => {

    const response = await getAireQuality();
    res.status(response.code).json( dataResponse( response ) );
});


router.get('/iq/:lat/:lon', validateIQ , async (req, res) => {

    const response = await getAireQualityByLatLon(req.params.lat,req.params.lon);
    res.status(response.code).json( dataResponse( response ) );
});


router.get('/most-polluted',async (req, res) => {

    const response = await mostPolluted();
    res.status(response.code).json( dataResponse( response ) );
});


module.exports = router; 