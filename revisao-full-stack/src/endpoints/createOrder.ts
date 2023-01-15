import { Response, Request } from 'express';
import connection from '../database/connections';
import { TProduct } from '../models/Products';

export const createOrder = async (req:Request,res:Response) => {
    let errorCode = 400;
    try { 
        //dados request
        const delivery_date = req.body.delivery_date;
        const fk_client = req.body.fk_client;
        const products:TProduct[] = req.body.products;
        
        if(!delivery_date || !products||! fk_client){
            throw new Error ("Body invalido")
        }
        // add registro
        products.forEach(async product =>{
//fazer pedido, atualizar o estoque

        await  connection("Case_Orders").insert(
            {
            order_date:new Date().toISOString().slice(0,10),
            delivery_date,
            qty:product.qty,
            fk_client,
            fk_products:product.id
        }
        )
        // get stock
     const getStock =   await connection.select("qty_stock")
        .from("Case_Products")
        .where({id:product.id})
        const stockAtual = Number(getStock[0].qty_stock);
        // atualizar o estoque
        await connection("Case_Products")
        .where({id:product.id})
        .update({qty_stock:stockAtual-product.qty})
    })
        res.status(200).send("Order criado com sucesso!")
    }
    catch (error:any) {
        res.status(errorCode).send({message:error.mesage});
        
    }
};
export default createOrder;