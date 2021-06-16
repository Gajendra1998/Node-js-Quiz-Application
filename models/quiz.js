const mongoose= require('mongoose');
const options_object = new mongoose.Schema({
    A:{
        type: String,
        required: true
    },
    B:{
        type: String,
        required: true
    },
    C:{
        type: String,
        required: true
    },
    D:{
        type: String,
        required: true
    }
});
const quizSchema= new mongoose.Schema({
    question:{
        type: String
    },
    options:{
        type: options_object,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
});
const quiz=mongoose.model('quiz',quizSchema);
module.exports= quiz;
