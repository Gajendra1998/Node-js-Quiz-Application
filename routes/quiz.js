const express = require("express");
const router = express.Router();
// includes our model
const quiz = require('../models/quiz');
router.post("/create", async (req, res) => {
  let newquiz = await new quiz({
    question: req.body.question,
    options: {
      A: req.body.A,
      B: req.body.B,
      C: req.body.C,
      D: req.body.D,
    },
    answer: req.body.answer,
  });
  await newquiz.save();
  res.send({
    message: "question added successfully",
    link: "/show",
    type: "post",
  });
});

router.put("/edit/:id", async (req, res) => {
  let ques = await quiz.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    
  });
  // let opts = await quiz.options.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
    
  // });
  // await opts.save();
  await ques.save();
  
  res.send({ message: "Your ques updated", link: "/show" });
});
router.post("/delete/:id", async (req, res) => {
  const remove = await quiz.deleteOne({ _id: req.params.id });
  if (!remove) return res.status(404).send("Given ID was not found");
  res.redirect("/show");
});
module.exports = router;