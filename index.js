ocument.addEventListener('DOMContentLoaded', function() {
   
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    const quantityTexts = document.querySelectorAll('.quantity-text');
    const itemPrices = document.querySelectorAll('.item-price');
    const totalPrice = document.querySelector('.total-price');

    function updateTotalPrice() {
        let total = 0;
        itemPrices.forEach((price, index) => {
            const quantity = parseInt(quantityTexts[index].textContent);
            const priceValue = parseFloat(price.textContent);
            total += quantity * priceValue;
        });
        totalPrice.textContent = total.toFixed(2);
    }

 
    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityTexts[index].textContent);
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityTexts[index].textContent = currentQuantity;
                updateTotalPrice();
            }
        });
    });

    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityTexts[index].textContent);
            currentQuantity++;
            quantityTexts[index].textContent = currentQuantity;
            updateTotalPrice();
        });
    });

   
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            button.closest('.cart-item').remove();
            updateTotalPrice();
        });
    });

  
    likeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            button.classList.toggle('liked');
        });
    });
});