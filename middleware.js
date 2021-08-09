const ExpressError = require("./expressError");
const Item = require('./item')

function verifyCreate(name, price){

    // Verify the name part (it cant be repeated in db)
    for (let i in items){
        if (items[i].name == name){
            throw new ExpressError("Item already exists", 400)
        }
    }

    // Verify the numbers part
        char = parseFloat(price)
        if (isNaN(char)){
            throw new ExpressError("Price is not a number", 400)
    }
}

function verifyUpdate(name, price){
    console.log("VERIFT UPDATE IS RUNNING")

    // Verify the name part (it cant be repeated in db)
    for (let i in items){
        console.log(items, "THIS IS ITEMS")
        console.log(items[i], "THIS IS ITEMS NAME")
        if (items[i].name == name){
            console.log(items[i])
            return items[i]
        } else {
        throw new ExpressError("Item doesn't exist", 400)}
    }

    // Verify the numbers part
        char = parseFloat(price)
        if (isNaN(char)){
            throw new ExpressError("Price is not a number", 400)
    }
}

function verifyDelete(name){

    // Verify the name part (it cant be repeated in db)
    for (let i in items){
        console.log(items, "THIS IS ITEMS")
        if (items[i].name == name){
            console.log(items[i])
            return items[i]
        } else{
            throw new ExpressError("Item does not exist", 400)
        }

    }
}





module.exports = {
    verifyCreate: verifyCreate,
    verifyUpdate: verifyUpdate,
    verifyDelete: verifyDelete
};