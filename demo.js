var bar = document.getElementById("bar")
var navbar = document.getElementById("navbar")
bar.addEventListener("click", function () {
    navbar.style.right = '0px'
})
var close = document.getElementById("close")
close.addEventListener("click", function () {
    navbar.style.right = "-300px"
})

/*Image Switching in single product*/

var mainimg = document.getElementById("mainimg")
var subimg = document.getElementsByClassName("small-img")
subimg[0].onclick = function () {
    mainimg.src = subimg[0].src;
}
subimg[1].onclick = function () {
    mainimg.src = subimg[1].src;
}
subimg[2].onclick = function () {
    mainimg.src = subimg[2].src;
}
subimg[3].onclick = function () {
    mainimg.src = subimg[3].src;
}

/*Add to cart in single shopping page*/
document.addEventListener("DOMContentLoaded", () => {
    const sproductBtn = document.getElementById("sproduct-add-btn");

    if (sproductBtn) {
        sproductBtn.addEventListener("click", () => {
            const name = document.querySelector("#details h4.font")?.innerText;
            const priceText = document.querySelector("#details h2")?.innerText;
            const image = document.getElementById("mainimg")?.src;
            const quantity = parseInt(document.querySelector("#details input[type='number']").value);

            if (!name || !priceText || !image || isNaN(quantity)) {
                alert("Product info missing.");
                return;
            }

            const price = parseFloat(priceText.replace("₹", ""));
            const item = { name, price, image, quantity };

            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

            const existing = cart.find(p => p.name === item.name);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push(item);
            }

            sessionStorage.setItem("cart", JSON.stringify(cart));
            alert("Product Added to Cart!🛒");
        });
    }
});

/*Add to cart in shop page*/
// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const product = button.closest(".pro");

            const name = product.querySelector(".product-name")?.innerText;
            const priceText = product.querySelector(".product-price")?.innerText;
            const image = product.querySelector("img")?.src;

            if (!name || !priceText || !image) {
                alert("Product info missing!");
                return;
            }

            const price = parseFloat(priceText.replace("₹", ""));
            const item = { name, price, image, quantity: 1 };

            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

            const existing = cart.find(p => p.name === item.name);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(item);
            }

            sessionStorage.setItem("cart", JSON.stringify(cart));
            alert("Product added to cart!🛒");
        });
    });
});

/*checkout popup*/
