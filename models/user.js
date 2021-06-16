const mongoose= require('mongoose');
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now   
    },
    marks:{
        type: Number,
        //required:true
    }
});
const user=mongoose.model('user',UserSchema);

module.exports= user;



















// async function createUser() {
//     const User=new user({
//         name:'boby',
//         email:'gajju@gmail.com',
//         option:'what is your name ?'
//     });
//     const result= await User.save();
//     console.log(result); 
// }
// createUser();