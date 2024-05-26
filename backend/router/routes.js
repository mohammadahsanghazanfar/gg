


const express=require('express')
const router=express.Router()
const control=require('../Controller/controller')

router.post('/api/createUser',control.create)
router.post('/api/login',control.findOne)
router.get('/api/gofood',control.find)
router.post('/api/orderfood',control.order1)

module.exports=router
