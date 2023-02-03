module.exports = {
    runCroneJob
} 

const http = require('../../util/http.request');
const strs = require('../../config/strs');
const hosts = require('../../config/communs');
const cron = require('node-cron');
const airQualityModel = require('../../models/air_quality.model');


function runCroneJob() {
    cron.schedule('* * * * *', async () => {
        
        await getDataFromRemote( 48.856613 ,2.352222);
    });
}

function getDataFromRemote(lat,lon) {

    return http.request({
        method: strs.get,
        url: hosts.IQ_URL_PARAMS(lat,lon)
    })
    // you can map data ...
    .then( result => {
        
        if( ! result.success ) return ;

        // u can valid data model form more security , crashing ... etc
        airQualityModel.create( result.data.data.current.pollution );
        
    } )
    .catch( error => error ); 
}