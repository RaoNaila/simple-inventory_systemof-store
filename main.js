//create enum for catagaries
var catagaries;
(function (catagaries) {
    catagaries[catagaries["furniture"] = 0] = "furniture";
    catagaries[catagaries["supplies"] = 1] = "supplies";
    catagaries[catagaries["stationary"] = 2] = "stationary";
    catagaries[catagaries["books"] = 3] = "books";
})(catagaries || (catagaries = {}));
// array to store prodouct.
let inventory = [];
//create function to add prodouct
function addProdouct(name, catagory, quantity, price) {
    const newProduct = {
        name: name,
        catagory: catagory,
        quantity: quantity,
        price: price,
    };
    inventory.push(newProduct);
}
;
addProdouct("laptop", catagaries.furniture, 3, 7500000);
addProdouct("Pen", catagaries.stationary, 100, 1.5);
console.log(inventory);
// inventory.forEach(newitem=>console.log(newitem));
inventory.forEach(product => {
    console.log(`Name: ${product.name}`);
    console.log(`Category: ${catagaries[product.catagory]}`); // Access category name by index
    console.log(`Quantity: ${product.quantity}`);
    console.log(`Price: ${product.price}`);
    console.log("-----------------------------");
});
export {};
//   addProdouct("laptop",catagaries.furniture,3,7500000);
//   addProdouct("Pen", catagaries.stationary, 100, 1.5);
//   console.log(inventory);
