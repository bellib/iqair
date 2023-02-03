const  mongoose  = require('mongoose');
const { Schema } = mongoose;

const simSchema = new Schema({
    profissionalID: Number,
    name: String,
    come: String,
    status: String,
    balance: mongoose.Types.Decimal128,
}); 
 
module.exports = mongoose.model("Sim", simSchema);

  