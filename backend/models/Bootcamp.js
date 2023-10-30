const mongoose = require("mongoose");
const { Schema } = mongoose;

const bootcampSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    img: String,
    stateId: Schema.Types.ObjectId 
    


},
{
    timestamps: true
})
//  bootcamp points to "bootcamps" collection
const Bootcamp = mongoose.model('Bootcamp', bootcampSchema)
module.exports= Bootcamp;