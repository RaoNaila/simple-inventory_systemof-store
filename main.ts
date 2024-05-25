// project, we'll create a simple inventory system using TypeScript. We'
// ll define arrays for the products, use tuples for product details,
//  and enums for product categories. The system will allow adding 
//  products, listing all products, and finding a product by name.
import inquirer from "inquirer"

//create enum for catagaries

enum catagaries {
    furniture,
    supplies,
    stationary,
    books,
}
type product={
    name:string
    catagory:catagaries
    quantity:number,
    price:number,
    

}
// array to store prodouct.
let inventory :product[]=[];

//create function to add prodouct
function addProdouct (name:string,catagory:catagaries,quantity:number,price:number):void{
    const newProduct: product = {
        name: name,
        catagory:catagory,
        quantity: quantity,
        price: price ,
        
    };
             inventory.push(newProduct);
    
 
};

addProdouct("laptop",catagaries.furniture,3,7500000);
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

//   addProdouct("laptop",catagaries.furniture,3,7500000);
//   addProdouct("Pen", catagaries.stationary, 100, 1.5);
//   console.log(inventory);
  
  