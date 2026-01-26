const arr = document.querySelectorAll(".btn");
const bill = document.querySelector(".cart");

let obj = {
    "Laptop": { quantity: 0, price: 3000 },
    "Headphone": { quantity: 0, price: 100 },
    "Smartwatch": { quantity: 0, price: 500 }
};

arr.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        const p = e.target.closest(".item");
        const p_name = p.querySelector(".title").innerText;

        obj[p_name].quantity++;

        updateCart();
    });
});

bill.addEventListener("click", (e) => {
    const name = e.target.dataset.name;
    if (!name) return;

    if (e.target.classList.contains("add")) {
        obj[name].quantity++;
    }

    if (e.target.classList.contains("minus")) {
        if (obj[name].quantity > 1) {
            obj[name].quantity--;
        }
        if (obj[name].quantity === 1){
            alert('Quantity zero');
        }
    }

    if (e.target.classList.contains("remove")) {
        obj[name].quantity = 0;
    }

    updateCart();
});

function updateCart() {
    bill.innerHTML = `<h3>Your Cart</h3>`;

    let total = 0;

    for (let i in obj) {
        if (obj[i].quantity > 0) {
            total += obj[i].quantity * obj[i].price;

            bill.innerHTML += `
                <div class="cart-item">
                    <div class="cart-controls">
                        <button class="add" data-name="${i}">+</button>
                        <button class="minus" data-name="${i}">-</button>
                        <button class="remove" data-name="${i}">x</button>
                    </div>

                    <div class="cart-info">
                        <p class="cart-title">${i}</p>
                        <p>${obj[i].quantity} × $${obj[i].price}</p>
                    </div>
                </div>
            `;
        }
    }

    if (total > 0) {
        bill.innerHTML += `
            <div class="cart-total">
                <h3>Total: $${total}</h3>
                <button class="checkout-btn">Checkout</button>
            </div>
        `;
    }
}
