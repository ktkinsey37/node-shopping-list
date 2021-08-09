const fs = require('fs');
let items = require('./fakeDB')
const express = require('express')
const itemRoutes = require('./itemRoutes');
const ExpressError = require('./express-shopping-list-solution/expressError');
console.log(items, "*THIS IS ITEMS")

const app = express()

app.use(express.json());

app.use('/items', itemRoutes)

app.listen(3000, function(){
    console.log("app on port 3000")
})

function verifyIncoming(name, price){
    console.log("VERIFCATION IS RUNNING")

    // Verify the name part (it cant be repeated in db)
    for (let i in items){
        if (items[i][name]){
            throw new ExpressError("Item already exists", 400)
        }
    }

    // Verify the numbers part
    for (let i in price){
        char = parseInt(price[i])
        if (isNaN(char)){
            throw new ExpressError("Price is not a number", 400)
        }
    }

}