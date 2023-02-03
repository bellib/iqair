module.exports = {
    getAireQuality,
    getAireQualityByLatLon,
    mostPolluted,
}

const http = require('../../util/http.request');
const strs = require('../../config/strs');
const hosts = require('../../config/communs');
const airQualityModel = require('../../models/air_quality.model');
const statusCodes = require('../../config/status.code');


function getAireQuality() {

    return http.request({
        method: strs.get,
        url: hosts.IQ_URL 
    })
        // you can map data ...
        .then(result => {
           
            if( result.success ) {

                return {
                    ...result, data: {
                        result: result.data.data.current.pollution
                    }
                }

            } else {
                return result;
            }

        })
        .catch(error => error );

}

function getAireQualityByLatLon(lat, lon) {

    return http.request({
        method: strs.post,
        url: hosts.IQ_URL_PARAMS(lat, lon)
    })
    .then(result => {
        
        if( result.success ) {

            return {
                ...result, data: {
                    result: result.data.data.current.pollution
                }
            }

        } else {
            
            return result;
        }

    })
    .catch(error => error );

}

function mostPolluted() {

    return airQualityModel.find().sort({ "aqius": -1 }).limit(1)
        .then(result => {
            return {
                code: statusCodes.success,
                data: result.length ? {
                    info: result[0],
                    time: (new Date(result[0].ts)).toString()
                } : {},
                success: true
            }
        })
        .catch(error => error);

}
