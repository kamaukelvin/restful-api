const mongoose = require('mongoose');

// creating a schema
// a schema is generally describing what your data looks like==>it has a title, description blah blah
// models are used to add data to our database
const PostSchema = mongoose.Schema({
    title:{
        type:String, 
        required:true},

    description:{
        type:String, 
        required:true},
        
    date:{
        type:Date,
        default: Date.now
    }
});

// export schema
// we give it a name(Posts) and the scheme it should use

module.exports = mongoose.model('Posts',PostSchema);