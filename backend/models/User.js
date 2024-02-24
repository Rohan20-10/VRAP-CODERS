const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type:"string",required:true},
    password: {type:"string",required:true},
    email: {type:"string",required:true},
    phoneNumber: {type:"string",required:true},
    totalCarbonEmissions:{type:"number",required:true},
    points:{type:"number",required:true},
    vehicle:{type:"ObjectId",ref:"Vehicles"},
});


module.exports = mongoose.model('Users', UserSchema);