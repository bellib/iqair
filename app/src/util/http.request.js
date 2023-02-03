const axios = require("axios");
const strCfg = require('../config/strs');
const statusCode = require('../config/status.code')

module.exports = {
    request 
}


async function request( config ) {

    let axiosCfg = {
        method: config.get,
        url: config.url,
        responseType: config.resType || strCfg.json
    };

    if( strCfg.post === config.method.toUpperCase() && config.body ) {
        axiosCfg = { ...axiosCfg, body };
    }

    try {

        const response =  await axios( axiosCfg );
        return {
            success: true,
            code: response.status ,
            // return data in general purpose 
            // you can map it in controller
            data: response.data
        }

    } catch (error) {
        if( error.request.res.statusCode && error.request.res.statusMessage ) {
            return {
                success: false,
                code: error.request.res.statusCode ,
                error: error.request.res.statusMessage
            }
        }

        return {
            success: false,
            code: statusCode.badRequest ,
            error: strCfg.forbidden
        };
    }

}