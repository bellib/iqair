const  mongoose  = require('mongoose');
const { Schema } = mongoose;

const airQualitySchema = new Schema({
    ts: Date,
    aqius: Number,
    mainus: String,
    aqicn: Number,
    maincn: String
}); 
 
module.exports = mongoose.model("AirQuality", airQualitySchema);

  