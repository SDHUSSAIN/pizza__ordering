
import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";


export default async function handler(req, res) {
    const { method, query:{ id } } = req ;
    await dbConnect();

    if(method === "PUT"){
        try{
            const updatedproduct = await Product.findByIdAndUpdate(id);
            res.status(200).json(updatedproduct);

        }catch(error){
            res.status(500).json(error);
        }
    }

    if(method ==="GET"){
        try{
            const newroduct = await Product.findById(id)
            res.status(200).json(newroduct);

        }catch(error){
            res.status(500).json(error);
        }

    }
    if(method ==="DELETE"){
        try{
            const deletedproduct = await Product.findByIdAndDelete(id);
            res.status(200).json(deletedproduct);

        }catch(error){
            res.status(500).json(error);
        }

    }
  }
  
  