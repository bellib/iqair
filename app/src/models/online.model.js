const  mongoose  = require('mongoose');
const { Schema } = mongoose;

const onlineSchema = new Schema({
    socketID: String,
    userID: String, 
    iv: String,
    hash: String
}); 
 
module.exports = mongoose.model("Online", onlineSchema);

  