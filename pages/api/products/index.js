import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";


export default async function handler(req, res) {
    const { method } = req ;
    await dbConnect();

    if(method === "POST"){
        try{
            const newProduct = await Product.create(req.body);
            res.status(200).json(newProduct);

        }catch(error){
            res.status(500).json(error);
        }
    }

    if(method ==="GET"){
        try{
            const Products = await Product.find().sort({'updatedAt': -1});
            res.status(200).json(Products);

        }catch(error){
            res.status(500).json(error);
        }

    }
  }
  