const express = require('express')
const productController = require('../controller/productcontroller')
const usercontroller=require('../controller/usercontroller')

const router = express.Router()

//to get all products
router.get('/all-products', productController.allProducts)

//to get one product
router.get('/get-product/:id', productController.getProduct)

router.post('/register',usercontroller.userregister)
router.post('/login',usercontroller.userlogin)



module.exports=router