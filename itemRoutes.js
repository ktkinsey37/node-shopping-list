const express = require('express');
const router = new express.Router();
const Item = require('./item')
const middle = require('./middleware')

router.get('/', (req, res) => {
    return res.json({ items: Item.getAll() });
})

router.post('/', (req, res) => {
    try{
        middle.verifyCreate(req.body.name, req.body.price)
        let item = new Item(req.body.name, parseFloat(req.body.price))
        return(res.json({"added": item})) 
    }
    catch(e){
        return(res.json({"error": {"message": e.message, "status": e.status}}))
    }
})

router.get('/:name', (req, res) => {
    try{
        let item = Item.get(req.param.name)
        return(res.json(item))
    }
    catch(e){
        return(res.json({"error": {"message": e.message, "status": e.status}}))
    }
})

router.patch('/:name', (req, res) => {
    try{
        let item = middle.verifyUpdate(req.param.name, req.body.price)
        console.log(item)
        item = Item.update(item.name)
        return(res.json(item))
    }
    catch(e){
        console.log(e)
        return(res.json({"error": {"message": e.message, "status": e.status}}))
    }
})

router.delete('/:name', (req, res) => {
    try{
        let item = middle.verifyDelete(req.param.name)
        item = Item.delete(req.param.name)
        return(res.json(item))
    }
    catch(e){
        return(res.json({"error": {"message": e.message, "status": e.status}}))
    }
})


module.exports = router