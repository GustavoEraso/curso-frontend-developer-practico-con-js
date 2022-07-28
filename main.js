const menuEmail = document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");
const hamburguesa= document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const carrito= document.querySelector(".navbar-shopping-cart");
const producDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", function(){toggleDesktopMenu(desktopMenu)});
hamburguesa.addEventListener("click", function(){toggleDesktopMenu(menuMobile)});
carrito.addEventListener("click", function(){toggleDesktopMenu(producDetail)});

function toggleDesktopMenu(elemento){
    
    if(!elemento.classList.contains("inactive")){
        elemento.classList.add("inactive"); 
      }
    else{
        if(!menuMobile.classList.contains("inactive"))
        {menuMobile.classList.add("inactive")};

        if(!desktopMenu.classList.contains("inactive"))
        {desktopMenu.classList.add("inactive")};

        if(!producDetail.classList.contains("inactive"))
        {producDetail.classList.add("inactive")};

        elemento.classList.toggle("inactive");
        }
    }

    const productList =[];
    
    productList.push({
        name:'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name:'Telefono',
        price: 820,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name:'Televisor',
        price: 1120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    function renderProducts(arr){

        /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
        <div>
        <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */


    for (product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price        
        const productName = document.createElement('p');
        productName.innerText= product.name

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);
    

    
    
    



