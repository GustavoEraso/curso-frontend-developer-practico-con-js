const menuEmail = document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");
const hamburguesa= document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const carrito= document.querySelector(".navbar-shopping-cart");
const producDetailLeftAside = document.querySelector(".product-detail-left-aside");
const producDetailRightAside = document.querySelector(".product-detail-right-aside");
const producDetailRightAsideClouseButon = document.querySelector(".product-detail-right-aside-close");
const cardsContainer = document.querySelector(".cards-container");

const producDetailRightAsideImg = document.querySelector(".product-detail-right-aside-img");
const producDetailRightAsidePrice = document.querySelector(".product-info-right-aside-price");
const producDetailRightAsideName = document.querySelector(".product-info-right-aside-name");
const producDetailRightAsideDescription = document.querySelector(".product-info-right-aside-description");



menuEmail.addEventListener("click", function(){toggleDesktopMenu(desktopMenu)});
hamburguesa.addEventListener("click", function(){toggleDesktopMenu(menuMobile)});
carrito.addEventListener("click", function(){toggleDesktopMenu(producDetailLeftAside)});
producDetailRightAsideClouseButon.addEventListener("click", function(){toggleDesktopMenu(producDetailRightAside)});

function toggleDesktopMenu(elemento){
    
    if(!elemento.classList.contains("inactive")){
        elemento.classList.add("inactive"); 
      }
    else{
        if(!menuMobile.classList.contains("inactive"))
        {menuMobile.classList.add("inactive")};

        if(!desktopMenu.classList.contains("inactive"))
        {desktopMenu.classList.add("inactive")};

        if(!producDetailLeftAside.classList.contains("inactive"))
        {producDetailLeftAside.classList.add("inactive")};
        
        if(!producDetailRightAside.classList.contains("inactive"))
        {producDetailRightAside.classList.add("inactive")};

        elemento.classList.toggle("inactive");
        }
    }

    function openRightAside(elemento){         

        
    
          if(elemento.classList.contains("inactive"))
          {elemento.classList.remove("inactive")}; 
        
          if(!menuMobile.classList.contains("inactive"))
          {menuMobile.classList.add("inactive")};
  
          if(!desktopMenu.classList.contains("inactive"))
          {desktopMenu.classList.add("inactive")};
  
          if(!producDetailLeftAside.classList.contains("inactive"))
          {producDetailLeftAside.classList.add("inactive")};
           
         
          
          }

          
        
        

    const productList =[];
    
    productList.push({
        name:'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descripcion: 'esta es una descripcion'
    });
    productList.push({
        name:'Telefono',
        price: 820,
        image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
        descripcion: 'esta es otra'
    });
    productList.push({
        name:'Televisor',
        price: 1120,
        image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg',
        descripcion: 'esta es la ultima'
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

      
    for (const product of arr){
       
         
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // productImg.addEventListener('click',function(){openRightAside(producDetailRightAside)});
        
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

        

        productImg.addEventListener('click', function(){
          mostrarInfoProduct(product.image, product.price, product.name, product.descripcion)
          openRightAside(producDetailRightAside)
          console.log(product.name)
        });

        
    }
};

renderProducts(productList);

function mostrarInfoProduct(imagen, precio, nombre, descripcion){
  
  
  producDetailRightAsideImg.setAttribute('src', imagen)
  producDetailRightAsidePrice.innerText = '$' + precio
  producDetailRightAsideName.innerText = nombre
  producDetailRightAsideDescription.innerText = descripcion

  // productoACarrito = []
  // productoACarrito.push({
  //     name: nombre,
  //     price: precio,
  //     image: imagen
  // })
}
    

    
    
    



