import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:60
    },
    image:{
        type:String,
        required:true,
       
    },
    desc:{
        type:String,
        required:true,
        
    },
    prices:{
        type:[Number],
        required:true,
        
    },
    extra_options:{
        type:[{ text:{type:String,required:true},price:{type:Number, required:true}}], 
    },

},
{
    timestamps:true
}
);

export  default mongoose.models.Product || mongoose.model("Product",ProductSchema) ;