require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/products')

const jsonProducts = require('./products.json')

const start = async () =>{
    try{
        await connectDB()
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!')
        process.exit(1)
    }catch(error){
         console.log(error)
    }
}
start()