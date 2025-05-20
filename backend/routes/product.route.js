import express from 'express';
import mongoose from 'mongoose';
import addNewProduct from '../models/product.models.js'; // <-- Use your model here
import { getAllProducts, postProducts, deleteProduct, updateProduct} from '../controllers/product.controller.js';

const router = express.Router();



router.get("/", getAllProducts);


router.post("/", postProducts);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);



export default router;