import Order from "../../../models/Order";
import dbConnect from "../../../utils/dbConnect";



export default async function handler(req, res) {
    const { method } = req ;
    await dbConnect();

    if(method === "POST"){
        try{
            const newOrder = await Order.create(req.body);
            res.status(201).json(newOrder);

        }catch(error){
            res.status(500).json(error);
        }
    }

    if(method ==="GET"){
        try{
            const Orders = await Order.find().sort({'updatedAt': -1});
            res.status(200).json(Orders);

        }catch(error){
            res.status(500).json(error);
        }

    }
  }
  