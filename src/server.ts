import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productsRouter from './routes/productsRouter'
import productsModel from './models/productsModel'

dotenv.config()

const app = express()

app.use( express.json() );
app.use( "/products", productsRouter );

// const fetchData = async () =>
// {
//     try
//     {
//         const res = await fetch( "https://dummyjson.com/products" );
//         const data = await res.json();

//         productsModel.create( data.products )
//     } catch ( error )
//     {
//         console.log( error );
//     }
// };

// fetchData();

const PORT = process.env.PORT || 5050

async function connecting ()
{
    await mongoose.connect( process.env.MONGO_URI as string )

    app.listen( PORT, () => console.log( `Server is running on port: ${ PORT }` )
    )
}
connecting()
