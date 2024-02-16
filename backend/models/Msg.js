const mongoose = require('mongoose')
const {Schema} = mongoose
const MsgSchema = new Schema({
    name: { type: String, required: true },// String is shorthand for {type: String}
    email: { type: String, required: true, unique: true },
    sub: { type: String, required: true },
    msg: { type: String, required: true }
    
})
const Msg = mongoose.model('msg', MsgSchema);
// Msg.createIndexes();
module.exports = Msg