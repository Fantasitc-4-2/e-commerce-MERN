const express = require("express");
const productService = require("../services/productService.js");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const roleAuthMiddleware = require("../middleware/roleAuthMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const validateProduct = require("../middleware/validateProduct.js");

//get all items provided with pagination defaulted to first page with a limit of 10 products
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const searchVal = req.query.search || "";

    const products = await productService.getAllProducts(
      limit,
      page,
      searchVal
    );
    res.status(200).send(products);
  } catch (e) {
    console.error(e.message);
    res.status(500).send({ error: "Internal error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  const product = await productService.getProductById(id);
  product
    ? res.status(200).send(product)
    : res.status(404).send({ error: "product can not be found" });
});

router.post("/", authMiddleware , roleAuthMiddleware("admin"), validateProduct , async (req, res) => {
  try {
    const product = req.body;
    const createdProduct = await productService.createProduct(product);
    res.status(201).send(createdProduct);
  }
  catch (e) {
    console.log(e.message);
    res.status(500).send({"error" : "internal server error"});
  }
});

// router.delete("/:id", authMiddleware, roleAuthMiddleware("admin"), async (req, res) => {
//   const id = req.params.id;
  
// })
