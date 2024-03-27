const menuSchema = require('../model/menu')


const createMenu = async(req,res)=>{
        let {Price,Title,Image} = req.body;
        try {
                let data = await menuSchema.create({Price,Title,Image})
                res.json({msg:"menu created successfully"})
        } catch (error) {
                res.json({msg:"error in creating menu",error:error.message})
        }
}
const getMenu = async(req,res)=>{
        try {
                let data = await menuSchema.find()
                res.json({msg:"data fetched successfully",data})
        } catch (error) {
                res.json({msg:" error in fetching data "})
        }
}


module.exports = {createMenu,
        getMenu

}