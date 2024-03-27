const express = require('express')
const app = express()
const port = 6392
const connectedToDb = require('./database')
const imageRoutes = require('./routes/imageRoutes')
const offerRoutes = require('./routes/offerRoutes')
const menuRoutes = require('./routes/menuRoutes')
const cors = require('cors')

connectedToDb()
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
        res.send("welcome back to  Home");
})


app.use('/Photo',imageRoutes)
app.use('/Offer',offerRoutes)
app.use('/Menu',menuRoutes)


app.listen(port,()=>{
        console.log(`server is runnig on port ${port}`);
})