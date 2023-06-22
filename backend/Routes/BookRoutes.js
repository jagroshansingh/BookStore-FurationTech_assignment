const express = require("express");
const { bookModel } = require("../Model/BookModel");
const { AuthModel } = require("../Model/AuthModel");
const jwt = require("jsonwebtoken");

const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
  const genre = req.query.genre;
  const edition = req.query.edition;
  const price = +req.query.price;
  const sort = req.query.sort;
  try {
    let obj = {};
    if (genre) obj.genre = { $in: genre };
    if (edition) obj.edition = { $in: edition };
    if (price) obj.cost = { $lte: price };

    let found;
    if (sort)
      found = await bookModel.find(obj).sort({ cost: sort == "asc" ? 1 : -1 });
    else found = await bookModel.find(obj);
    res.send(found);
  } catch (error) {
    res.send(error);
  }
});

bookRouter.get("/singleBook",async(req,res)=>{
    console.log(req.query.bookId)
    try {
        let bookDetail= await bookModel.findById(req.query.bookId)
        res.send(bookDetail)
    } catch (error) {
        res.send(error)
    }
})

bookRouter.patch("/cart/add", (req, res) => {
  let productID = req.body.productID;
  try {
    jwt.verify(req.headers.authorization, "fullstack", async (err, decoded) => {
      if (decoded) {
        let user = await AuthModel.findById(req.body.userID);
        if (user && !user.cart.includes(productID)) {
          await AuthModel.updateOne(
            { _id: req.body.userID },
            { $push: { cart:productID } }
          );
          res.send("verified");
        } else res.send(null);
      } else res.send(null);
    });
  } catch (error) {
    res.send(error);
  }
});

bookRouter.delete("/cart/delete",async(req,res)=>{
    let userID=req.query.userID;
    let productID=req.query.productID;
 try {
    await AuthModel.updateOne({_id:userID},{$pull:{cart:productID}})
    res.send('removed success')
 } catch (error) {
    res.send(error)
 }
})

module.exports = { bookRouter };
