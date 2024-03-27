const offerSchema = require('../model/offer')

const offer = async(req,res)=>{
        let {About,Offers,Photo} = req.body
        try {
                let data = await offerSchema.create({About,Offers,Photo})
                res.json({msg:"offer created successfully"})
        } catch (error) {
               res.status(500).json({msg:"galat hai ",error:error.message,success:false})
        }
}

const getdata = async(req,res)=>{
           try {
               let data = await offerSchema.find() 
               res.json({msg:"fetched data successfully",data})
           } catch (error) {
                res.json({msg:'error in fetching data', error:error.message})
           }
}



module.exports={offer,
        getdata
}