//MENU


const menu = document.querySelector('.burger-icon');
const menuResponsive = document.querySelector('.navbar');
const cart = document.querySelector ('.cart-icon');
const cartResponsive = document.querySelector('.cart-section-2');

menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('hidden');
})

/*
cart.addEventListener('click', () => {
  
    cartResponsive.classList.toggle('cart-section-hidden-2');
})


//FILTER


const filterButton = document.querySelector('#filter-button');
const products = document.querySelectorAll('.pants');

filterButton.addEventListener('click', (event) => {
  const category = event.target.textContent.toLowerCase();
  
  if (category === 'show all') {
    products.forEach(product => {
      product.style.display = 'block';
    });
  } else {
    products.forEach(product => {
      if (product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
});
*/

//FILTER JS 

/*
(function () {
  const buttons = document.querySelectorAll(".btn")
  const storeItems = document.querySelectorAll(".card")

  buttons.forEach((button) => {
    button.addEventListener("click" , (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter

      storeItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block"
        } else {
          if (item.classList.contains(filter)){
            item.style.display = "block"
          }else {
            item.style.display = "none"
          }
        }
      })
    })
  })
}) ();


2ND OPTION

const filterButtons = document.querySelectorAll("#filter-button .btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterProducts(button.getAttribute("data-category"));
  });
});

const filterProducts = (category) => {
  const productos = document.querySelectorAll(".card");

  productos.forEach((product) => {
    if (category === "all" || product.getAttribute("data-category") === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

*/

//FILTER JS FINAL

const filterButtons = document.querySelectorAll("#filter-button button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.getAttribute("data-category");

    const productos = document.querySelectorAll(".card");
    productos.forEach((product) => {
      if (selectedCategory === "all" || selectedCategory === product.getAttribute("data-category")) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

//FILTER WITH SEARCH BAR JS FINAL

/*

(function () {

  const search = document.querySelector("#search-item")
  const storeItems = document.querySelectorAll("h3")


  search.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim()



    storeItems.forEach((item) => {
      if(item.textContent.includes(searchFilter)){
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  }) 
})();



document.addEventListener("keyup", (e) => {

  if(e.target.matches("#search-item")){

    document.querySelectorAll(".card").forEach(item =>{

      item.textContent.toLowerCase().includes(e.target.value.toLowerCase())?
      ite
    })


  }

})



const busqueda = document.getElementById('busqueda');
busqueda.addEventListener('input', () => {
  const valorBusqueda = busqueda.value.toLowerCase().trim();

  const items = shopContent.querySelectorAll('.card');
  items.forEach(item => {
    const nombre = producto.querySelector('h3').textContent.toLowerCase();
    if (nombre.includes(valorBusqueda)) {
      producto.parentElement.style.display = 'block';
    } else {
      producto.parentElement.style.display = 'none';
    }
    
  });
});




const d = document;

function searchFilters = ('.searchInput' '.card');

d.addEventListener("keyup", (e) => {
  if (e.target.matches('.searchInput'))
    d.querySelectorAll('.card').forEach (el => {
      el.textContent.toLowerCase().includes(e.target.value)
      ?el.classList.remove("filter")
      :el.classList.add("filter")
}) 
};





(function () {
  const searchInput = document.querySelector(".searchInput");
  const storeItems = document.querySelectorAll(".card");

  searchInput.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();

    storeItems.forEach((item) => {
      const itemName = item.querySelector("h3").textContent.toLowerCase();
      if(itemName.includes(searchFilter)){
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  }) 
})();

*/