import { ObjectId, Schema, model } from "mongoose";

interface IProducts
{
    id: number,
    title: string;
    description: string;
    category: string;
    price: number,
    brand: string;
    images: string[]
}

const productsSchema = new Schema<IProducts>( {
    id: {
        type: Number,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: {
        type: [ String ],
        required: true
    }
} );

const productsModel = model<IProducts>( "products", productsSchema );

export default productsModel;