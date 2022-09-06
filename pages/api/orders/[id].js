import Order from "../../../models/Order";
import dbConnect from "../../../utils/dbConnect";


export default async function handler(req, res) {
    const { method, query:{ id } } = req ;
    await dbConnect();

    if(method === "PUT"){
        try{
            const updatedOrder = await Order.findByIdAndUpdate(id,{status:req.body.status});
            res.status(200).json(updatedOrder);

        }catch(error){
            res.status(500).json(error);
        }
    }

    if(method ==="GET"){
        try{
            const newOrder = await Order.findById(id)
            res.status(200).json(newOrder);

        }catch(error){
            res.status(500).json(error);
        }

    }
    if(method ==="DELETE"){
        try{
            const deletedOrder = await Order.findByIdAndDelete(id);
            res.status(200).json(deletedOrder);

        }catch(error){
            res.status(500).json(error);
        }

    }
  }
  
  