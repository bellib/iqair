const  mongoose  = require('mongoose');
const { Schema } = mongoose;

const profissionalClientSchema = new Schema({
    socketID: String,
    hash: String,
}); 
 
module.exports = mongoose.model("ProfissionalClient", profissionalClientSchema );

  