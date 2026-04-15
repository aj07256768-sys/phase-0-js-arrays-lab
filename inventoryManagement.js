// Write your code here

  let   products=['laptop','phone' ,'headphones','monitor']
    
  // login a product
    function logFirstProduct(){
        return products[3]
    }
     // added product
      function  addProduct(){ 
        return products.unshift='smartphones'
      }
 
      //updating product
 const  updateProductName=()=>{

    return products[1]='gaminglaptop'
 }

 // removing product
      const removeLastProduct=()=>{ 
        return products.pop();
      } 

            

        



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
