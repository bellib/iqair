const dataResponse = require('../../util/data.response');
const strs = require('../../config/strs');
const statusCodes = require('../../config/status.code');

module.exports = function (req,res, next) {

    // Regular expression to check if string is a latitude and longitude
    const regexExp = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;

    // String with latitude and longitude separated by comma
    const str = `${req.params.lat},${req.params.lon}`;

    if( regexExp.test(str) ){
        return next();
    }

    return res.status(statusCodes.badRequest).json(dataResponse({
        success: false,
        code: statusCodes.badRequest,
        error: strs.validators.errorData
    }));
    
}