 import addNewProduct from "../models/product.models.js";
import mongoose from "mongoose";
 
 export const getAllProducts = async (req, res) => {
    try {
        const displayProducts = await addNewProduct.find({}); // <-- Use your model here
        res.status(200).json({ success: true, data: displayProducts });
    } catch (error) {
        console.error("Error in Get products:", error.message);
        res.status(500).json({ success: false, message: " Server Error" });
    }
};

export const postProducts = async (req,res) => {
const requestProduct = req.body; // user will send this data

if (!requestProduct.name || !requestProduct.price || !requestProduct.image)  {
    return res.status(400).json({ message: "Please fill all the fields" });
}

const newProduct =  new addNewProduct(requestProduct);
console.log("newProduct:", newProduct);
try{
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct});
}catch(error){
    console.error("Error in Create product:", error.message);
    res.status(500).json({success: false, message: "Internal Server Error"});
}
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message:"Invalid Product ID"});
    }

    console.log("id:" + id);
    try {
        await addNewProduct.findByIdAndDelete(id); // <-- Use your model here
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Product not found" });
        console.error("Error in Delete product:", error.message);
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const requestProduct = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message:"Invalid Product ID"});
    }
    try{
        const updatedProduct = await addNewProduct.findByIdAndUpdate(id, requestProduct, {new:true})
        res.status(200).json({success:true, data: updatedProduct});
        console.log("updatedProduct:", updatedProduct);
    }catch(error){
        res.status(500).json({success:false, message:" Server Error"});
        console.error("Error in Update product:", error.message);
    }
};