class ShoppingCart{
    items = [];
    getItems(){
            return this.items;
    }

    addItem(itemName, quantity, price){
       
        let item = {
            name : itemName,
            quantity : quantity,
            pricePerUnit : price
        }
        this.items.push(item);
    }
    
    clear(){
        this.items.length = 0;
    }

    total(){
        return this.items.reduce((tot, value)=> tot+(value.quantity * value.pricePerUnit),0);
    }
}
module.exports = ShoppingCart;