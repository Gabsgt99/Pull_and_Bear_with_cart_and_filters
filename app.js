const shopContent = document.getElementById("shopContent");
const showCart = document.getElementById("ShowCart");
const modalContainer = document.getElementById("modal-container");
const CartQuantity = document.getElementById("cartQuantity");
const heartIcon = document.getElementById("heartIcon");



let carrito = JSON.parse(localStorage.getItem("cart")) || [];

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    shopContent.innerHTML = "";

    let products = [];



    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card filtered";
        content.setAttribute("data-category", product.category);
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} €</p>
        `;
        shopContent.append(content);
    
        let buy = document.createElement("button");
        buy.innerText = "AÑADIR";
        buy.className = "buy btn1";
    
        content.append(buy);
    
        buy.addEventListener("click", () => {
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
            if (repeat) {
                carrito.map((prod) => {
                    if(prod.id === product.id){
                        prod.quantity++;
                    }
                });
            } else {
                carrito.push({
                    id: product.id,
                    img: product.img,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    category: product.category,
                });
            }
            cartCounter();
            saveLocal();
        });
        console.log(content);
        products.push(content);


       /* heartIcon.addEventListener("click", () => {
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
            if (repeat) {
                carrito.map((prod) => {
                    if(prod.id === product.id){
                        prod.quantity++;
                    }
                });
            } else {
                carrito.push({
                    id: product.id,
                    img: product.img,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    category: product.category,
                });

            };
        });*/

    });

    // Función para filtrar los productos por nombre
  const filterProducts = (searchTerm) => {
      const filteredProducts = products.filter((product) =>
      product.querySelector("h3").textContent.toLowerCase().includes(searchTerm.toLowerCase())
      );
       shopContent.innerHTML = "";
       filteredProducts.forEach((product) => {
       shopContent.append(product);
       });

    };

    const searchInput = document.getElementById("search-item");
    searchInput.addEventListener("input", () => {
    filterProducts(searchInput.value);
    });


};
getProducts();




//set item
const saveLocal = () => {
    localStorage.setItem("cart", JSON.stringify(carrito));
};

//get item
JSON.parse(localStorage.getItem("cart"));
