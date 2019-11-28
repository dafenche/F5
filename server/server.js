let express = require('express')
let homeList = require('./datas/homeList.json')
let shopList = require ('./datas/shopList.json')
let app = new express()



app.get('/homeList',(req,res) => {
  res.send(homeList)
})
app.get('/shopList',(req,res) => {
  res.send(shopList)
})

app.listen('3000',() => {
  console.log('The server is ok')
})
