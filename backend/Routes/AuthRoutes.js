const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const { AuthModel } = require("../Model/AuthModel");

authRouter.post("/signup", async (req, res) => {
  try {
    let found = await AuthModel.find({ email: req.body.email });
    if (found.length === 0) {
      bcrypt.hash(req.body.password, 5, async (err, hash) => {
        try {
          await AuthModel.insertMany({ email: req.body.email, password: hash, cart:[]});
          res.send("Registration Success");
        } catch (error) {
          res.send("Registration Failed");
        }
      });
    } else res.send("Email Already Registered");
  } catch (error) {
    res.send(error);
  }
});

authRouter.post("/login", async (req, res) => {
    try {
      let found = await AuthModel.find({ email: req.body.email });
      // console.log(found)
      if (found.length === 1) {
        bcrypt.compare(req.body.password, found[0].password, (err, result) => {
          if (result)
          {
              const token=jwt.sign({furation:'tech'},'fullstack')
              res.send({msg:"Login Successful",token:token, userID:found[0]._id});
          } 
          else res.send({msg:"Invalid Credentials"});
        });
      }
      else res.send({msg:"Invalid Credentials!"})
    } catch (error) {
      res.send(error);
    }
  });

  authRouter.get('/single',async(req,res)=>{
    try {
      let details=await AuthModel.findById(req.query.userID)
      res.send(details)
    } catch (error) {
      res.send(error)
    }
  })

module.exports={authRouter}