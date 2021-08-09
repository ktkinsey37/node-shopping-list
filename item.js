const ExpressError = require("./expressError");
const items = require("./fakeDb")
console.log(items, "this is items in item.js (class template for item)sk")

class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price.toFixed(2);

      items.push(this)
    }

    static getAll(){
        return items
    }

    static get(name){
        let foundItem;
        for (let i in items){
            if (items[i].name == name){
                console.log("LOOPING THROUGH i TIMES IN ITEM.GET", i)
                foundItem = items[i]
                return foundItem
            } throw new ExpressError("Item unable to be located", 400)
        }
    }

    static update(name, price){
        let itemToUpdate = Item.get(name)
        itemToUpdate.name = name
        itemToUpdate.price = price
        return JSON.stringify({"updated": itemToUpdate})
    }

    static delete(name){
        let itemToDelete = Item.get(name)
        let idxToDelete = items.indexOf(itemToDelete)
        items.splice(idxToDelete, 1)
        return {'message': 'deleted'}
    }
  }

module.exports = Item;