const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = express.Router()
const product = require('./Model/producSchema.js')
const cors = require('cors')
const morgan = require('morgan')
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended:true}))

try {
    const connect = mongoose.connect('mongodb+srv://sendmailtomuslih:sendmailtomuslih@cluster0.1oefpkp.mongodb.net/connectify')
    if(connect){
        console.log('database connected successfully');
    }
} catch (error) {
    console.log('database connection error')
}

app.post('/api/product',async(req,res)=>{
    try {
        console.log(req.body);
        const {name,description,brand,offers,price} = req.body
        const response = await product.create({name,description,brand,offers,price})
        res.json({
            status: 'success',
            message: 'Product created successfully'
        })
        
    } catch (error) {
        console.log(error);
    }
})

app.put ('api/product/:id',async(req,res)=>{
    try {
        console.log(req.body);
        const productId = req.params
        const {name,description,brand,offers,price} = req.body
        const response = await product.updateOne({name,description,brand,offers,price})
        res.json({
            status: 'success',
            message: 'Product created successfully'
        })
        
    } catch (error) {
        console.log(error);
    }
})

const port = 3000
app.listen(3000,()=> {
    console.log(`server is listeningon port ${port}`)
})


