const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    
    name: {
        require :false,
    },
    description: {
        type : Array,
        require :false
    },
    useTecnology: {
        type : Array,
        require :false
    },
    live: {
        
        require :false
    },
    code: {
        
        require :false
    },
    server: {
        
        require :false
    },
   
});
module.exports = mongoose.model("Project",projectSchema);