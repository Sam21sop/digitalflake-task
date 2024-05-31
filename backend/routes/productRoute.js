import express from "express";
import protect from "../middleWare/authMiddleware.js";
import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { upload } from "../utils/fileUpload.js";

const productRoute = express.Router();


productRoute.post("/", protect, upload.single("image"), createProduct);
productRoute.patch("/:id", protect, upload.single("image"), updateProduct);
productRoute.get("/", protect, getProducts);
productRoute.get("/:id", protect, getProduct);
productRoute.delete("/:id", protect, deleteProduct);

export default productRoute;
