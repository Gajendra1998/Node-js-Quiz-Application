const express = require("express");
const quiz = require("../models/quiz");
const user = require("../models/user");
const router = express.Router();
const app = express()
app.use(express.static("public"));
//welcome page
router.get('/',(req,res)=>res.render('welcome'));


router.get('/queslist' ,async(req,res) => {
    const questions = await quiz.find();
    console.log(quiz.question);
    res.render('queslist' , {quiz: questions});
});
router.get('/result' ,async(req,res) => {
    const result = await user.find();
    res.render('result' , {user:result });
});

router.get('/show',async(req,res)=> {
    const questions = await quiz.find();
    res.render('updateques' , {quiz: questions});
});
router.get('/create', (req,res)=> {
    res.render('addques' , {question: "" ,options:{} ,answer:"" , link: '/quiz/create' , type: "post" , script:"/quiz.js" });
});


router.get('/edit/:id' , async(req,res)=> {
    const { question , options , answer} = await quiz.findById(req.params.id);
    res.render('addques' , {question,options,answer,link: `/quiz/edit/${req.params.id}`, type: "put" , script: "/quiz.js"});
});

router.post('/quiz' , async(req,res)=> {
    let User = new user({
        name: req.body.name ,
        marks: req.body.marks 
    });
    await User.save(); 
    res.send({message: "Your response submitted  your marks are"  , link:"/result"});
});



// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const _id = req.params.id 

//         const question = await quiz.deleteOne({_id})

//         if(question.deletedCount === 0){
//             return res.status(404).json()
//         }else{
//             return res.status(204).json()
//         }
//     } catch (error) {
//         return res.status(500).json({"error":error})
//     }
// })

 module.exports = router;


//  {  }  @   ()   % # $ ^ & 8 ? < > " " 