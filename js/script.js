let total = 0;
let couponApplied = false;

function handleClick(target) {
    // set the product title as an ordered list
    const productTitle = target.querySelector('.card-title').innerText;
    const li = document.createElement('li');
    li.innerText = productTitle;
    const selectedItemContainer = document.getElementById('list-container');
    const liNumber = selectedItemContainer.children.length + 1;
    li.innerText = liNumber + '. ' + productTitle;
    selectedItemContainer.appendChild(li);

    // set the price to total price
    const price = target.querySelector('.price').innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const firstTotalPrice = document.getElementById('first-total-price');
    firstTotalPrice.innerText = total.toFixed(2);

    // set the grand total price
    const grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = parseFloat(firstTotalPrice.innerText).toFixed(2);

    // update discount and grand total if coupon applied
    if (couponApplied === true) {
        applyCoupon();
    }
    // enable or disable purchase button and coupon button
    var purchaseBtn = document.getElementById('purchase-btn');
    var applyCouponButton = document.getElementById("apply-coupon-btn");

    purchaseBtn.disabled = total <= 0;
    applyCouponButton.disabled = total < 200;

}

// applying coupon code to calculate discount
function applyCoupon() {
    const couponField = document.getElementById('coupon-field');
    const discountPrice = document.getElementById('discount-price');
    const grandTotal = document.getElementById('grand-total-price');
    const firstTotalPrice = document.getElementById('first-total-price');


    if (couponField.value === 'SELL200') {
        const discountMoney = parseFloat(firstTotalPrice.innerText) * 0.2;
        discountPrice.innerText = discountMoney.toFixed(2);
        grandTotal.innerText = (total - discountMoney).toFixed(2);

    }
    else {
        alert('Please enter valid coupon code');

    }

}


// add event listener in apply button
document.getElementById('apply-coupon-btn').addEventListener('click', function () {
    // called the applyCoupon function when Apply button is clicked
    applyCoupon();
    couponApplied = true;


})

// go home but when clicked go to home page and refresh data
document.getElementById('go-home-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
})

