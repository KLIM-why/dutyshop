
let cart = []; 

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalPriceDiv = document.getElementById("total-price");
    cartItemsDiv.innerHTML = ""; 

    let totalPrice = 0;
    cart.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.textContent = product;
        cartItemsDiv.appendChild(productDiv);
        
        
        const productPrice = getProductPrice(product);
        totalPrice += productPrice;
    });

    totalPriceDiv.textContent = "Загальна сума: ₴" + totalPrice;
}

function getProductPrice(product) {
    
    const prices = {
        "Худі Denim tears": 3500,
        "PALACE X EVISU DENIM JEAN STONE WASH": 5000,
        "Nike x NOCTA Tech Fleece Hoodie": 3500,
        "Худі Supreme Stone Island Hooded Sweatshirt": 3000,
        "Худі Supreme Stone Island": 2800,
        "Кроосівки adidas by Raf Simons Ozweego 3 Burgundy": 4500,
        "Пуховик Palace c.p. company puff down jacket": 8000,
        "Supreme Lafayette Reflective Down Jacket": 6000,
        "Кросівки Nike Air Max 95 Comme des Garcons Black": 5000,
        "Nike Skepta x Air Max Tailwind": 1488,
        "A Bathing ape Road Sta M1": 3500,
        "Play CDG Double Heart Zip Hoodie": 3200,
        "Corteiz bolo lite jacket": 6400,
        "Palace Pro Team 02 Crew Neck Sweatshirt": 3100,
        "Supreme Snow White Sweater": 3500,
        "Essentials hoodie": 3500,
        "Timberland boots": 3500,
        "Supreme x Thrasher Hooded Work Jacket": 4600,
        "Supreme Blured Logo Sweater": 3400,
        "Supreme x Air Jordan Puffer Jacket": 7000,
    };

    return prices[product] || 0;
}

function buyItems() {
    if (cart.length > 0) {
        alert("Дякуємо за покупку!");
        cart = []; 
        updateCart();
    } else {
        alert("Ваш кошик порожній!");
    }
}
