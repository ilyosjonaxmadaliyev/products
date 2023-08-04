import { Request, Response } from "express";
import productsModel from "../models/productsModel";


const getProducts = async ( req: Request, res: Response ) =>
{
    try
    {

        let limit = ( req.query.limit as any ) || 10
        let skip = ( req.query.skip as any ) || 0

        const count = await productsModel.count()
        const products = await productsModel.find(
            {},
            { __v: 0, _id: 0, },
            { sort: { id: 1 }, limit, skip },

        );
        res.json( {
            products,
            total: count,
            limit,
            skip
        } );
    } catch ( error: any )
    {
        res.json( { error: error.message } );
    }
};

const searchProducts = async ( req: Request, res: Response ) =>
{
    try
    {
        const { search } = req.query;
        const rgx = ( pattern: any ) => new RegExp( `.*${ pattern }.*` );
        const searchRgx = rgx( search );

        const products = await productsModel.find(
            {
                $or: [
                    { title: { $regex: searchRgx, $options: "i" } },
                    { description: { $regex: searchRgx, $options: "i" } },
                    { brand: { $regex: searchRgx, $options: "i" } },
                ]
            }
        );
        res.json( {
            products
        } );
    } catch ( error: any )
    {
        res.json( { error: error.message } );
    }
};

export { getProducts, searchProducts }