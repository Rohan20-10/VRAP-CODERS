const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    user: {type:"ObjectId",ref:"Users"},
    route:{type:"ObjectId",ref:"Routes"},
    vehicle:{type:"ObjectId",ref:"Vehicles"},
    startTime: {type:"string",required:true},
    endTime: {type:"string",required:true},
    totalTripDistance:{type:"number",required:true},
    sharedTrip:{type:"number",required:true},
    passengers:{type:"ObjectId",ref:"Users"},
});

module.exports = mongoose.model('Trips', TripSchema);