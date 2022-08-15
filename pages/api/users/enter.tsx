import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';



 async function handler(req:NextApiRequest, res:NextApiResponse){  
   const { phone, email } = req.body 
   if(email){
     const user = await client.user.findUnique({
        where:{
            email
        }
     })
     if(!user){
        console.log("Did not found. Will create.")
        await client.user.create({
            data:{
                name:"Anonymous" ,
                email
            }
        })
     }
     console.log(user)
   }
}

export default withHandler("POST", handler)