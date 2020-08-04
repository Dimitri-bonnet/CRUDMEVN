const router = require("express").Router()
const Product = require("../models/product.model")

/* Read BDD */
router.get("/", (req, res) => {
  Product.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("List product ok")
      res.json(data)
    }
  })
})

/* La route de mon api pour envoyer des données a ma BDD mongoDB  */
/* Ajouter /creat-product */
router.post("/create-product", async (req, res) => {
  const body = req.body
  try {
    await new Product({
      img: body.img,
      title: body.title,
      price: body.price,
    }).save()
    res.json("ok")
    console.log("product add")
  } catch {
    next(e)
  }
})

/* Delete product by ID */
router.delete("/delete-product/:id", (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("product delete")
      res.status(200).json({
        msg: data,
      })
    }
  })
})
/* Update product by ID */
router.route("/update-product/:id").post((req, res, next) => {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log("no")
        return next(error)
        
      } else {
        res.json(data)
        console.log("Student successfully updated!")
      }
    }
  )
})

module.exports = router
