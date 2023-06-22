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

bookRouter.post("/cart/add", (req, res) => {
  productID = req.body.productID;
  try {
    jwt.verify(req.headers.authorization, "fullstack", async (err, decoded) => {
      if (decoded) {
        let user = await AuthModel.findById(req.body.userID);
        // console.log(user);
        if (user && !user.cart.hasOwnProperty(productID)) {
          await AuthModel.updateOne(
            { _id: req.body.userID },
            { $set: { [`cart.${productID}`]: 1 } }
          );
          res.send("verified");
        } else res.send(null);
      } else res.send(null);
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = { bookRouter };
