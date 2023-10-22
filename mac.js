alert("hi");
const products = [{id: 1, name:"macbook Air", category:"macbook", price:999 }

]
let cart =[];0
function showAllProducts(){
    const productGrid = 
    document.getElementById("productGrid");
    products.forEach(product =>{
        const productElement= 
        document.createElement("div");
        productElement.classList.add("product");
        const imageElement= 
        document.createElement("img")
        imageElement.src="pic.jpg"
        productElement.appendChild(imageElement);
        const nameElement=
        document.createElement("h3");
        nameElement.textContent=product.name;
        productElement.appendChild("nameElement");
        const buttonElement=
        document.createElement("button");
        buttonElement.textContent="add to cart";
        buttonElement.addEventListener("click", () => "addToCart"(product));
        productElement.appendChild(buttonElement);
        productGrid.appendChild(productElement);
    });
}
 function showProductByCategory(category){
    const productGrid =
    document.getElementById("productGrid");
    productGrid.innerHTML = "";
    const filtredProducts =
    products.filter(product => product.category ===category);
    filtredProducts.forEach(product =>{
        const productElement =document.createElement("div");
        productElement.classList.add("product");
        productGrid.appendChild(productElement);
    });
}
 function showProductDetails(productId){
    const productDetils =
    products.find(product => product.id === productId);

}
 function addToCrt(product){
    cart.push(product);
    calculateTotal();

}
 function clearCart(){
    cart = [];
    calculateTotal();
}
 function calculateTotal(){

    const totalElement =
    document.getElementById("total");
    const grndTotal =
    cart.reduce((sum,product) => sum + product.price, 0);
    totalElement.textContent = 'Grand Total: $$ {grandTotal}';
}
showAllProducts();