/*
TO SHOW THE EMPTY CART ELEMENTS

const empty_cart = document.getElementById('shoppingCartEmpty');
const cartLength = carrito.length;

const showEmptyCart = () => {

    if(cartLength == 0){
        empty_car.style.display = 'flex';
      }else{
        empty_car.style.display = 'none';
    }
};

showEmptyCart();*/


const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  const modalHeader=document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">Carrito.</h1>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
  })

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
      let cartContent = document.createElement("div");
      cartContent.className = "modal-content";
      cartContent.innerHTML = `
             <img src="${product.img}">
             <h3>${product.name}</h3>
             <p>${product.price} €</p>
             <span class="minus"> - </span>
             <p>${product.quantity}</p>
             <span class="plus"> + </span>
             <p>Total: ${(product.quantity * product.price).toFixed(2)}</p>
             <span class="delete-product"> ❌ </span>
           `;

      modalContainer.append(cartContent);

      let minus = cartContent.querySelector(".minus");

      minus.addEventListener("click", () => {
          if(product.quantity !== 1) {
              product.quantity--;
          }
          saveLocal();
          pintarCarrito();
      });

      let plus = cartContent.querySelector(".plus");
      plus.addEventListener("click", () => {
              product.quantity++;
              saveLocal();
          pintarCarrito();
      });

      let deleteButton = cartContent.querySelector(".delete-product");

      deleteButton.addEventListener("click", () => {
          deleteProduct(product.id)
      })


      //let deleteButton = document.createElement("span");
      //deleteButton.innerText = "❌";
     //deleteButton.className = "delete-product";
     // cartContent.append(deleteButton);

      //deleteButton.addEventListener("click", deleteProduct);
  });


  const subtotal = carrito.reduce((acc, el) => acc + el.price * el.quantity, 0);
  const total = subtotal.toFixed(2);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} €`;
  modalContainer.append(totalBuying);

}

   showCart.addEventListener("click", pintarCarrito);


   const deleteProduct = (id) => {
      const foundId = carrito.find((element) => element.id === id);

      carrito = carrito.filter((carritoId) => {
          return carritoId !== foundId;
      });
      cartCounter();
      saveLocal();
      pintarCarrito();
    };

  const cartCounter = () => {
      CartQuantity.style.display = "block";

      const cartLength = carrito.length;

      localStorage.setItem("cartLength", JSON.stringify(cartLength));

      CartQuantity.innerText = JSON.parse(localStorage.getItem("cartLength"));
     };

  cartCounter();
  
  