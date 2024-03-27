const imageSchema = require('../model/images')

const createImage = async(req,res)=>{
        let {Images,title} = req.body
        try {
                let create = await new imageSchema({Images,title})
                await create.save();
                res.send('image created successfully')
        } catch (error) {
                res.status(500).json({msg:"error in fetching",error:error.message})
        }
}

        const getImage = async(req,res)=>{
                try {
                        let Photo = await imageSchema.find()
                        res.json({msg:"fetched data",Photo})
                } catch (error) {
                        res.send('error in fetching data')
                }
        }

module.exports = {createImage,
        getImage
}

