const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehType: {type:"string",required:true},
    fuelType: {type:"string",required:true},
    mileage: {type:"number",required:true},
    co2EmissionRate: {type:"string",required:true}
});

module.exports = mongoose.model('Vehicles', VehicleSchema);