let total = 0;
let couponApplied = false;

function handleClick(target) {
    // set the product title as an ordered list
    const productTitle = target.querySelector('.card-title').innerText;
    const selectedItemContainer = document.getElementById('list-container');
    const liNumber = selectedItemContainer.children.length + 1;
    const li = document.createElement('li');
    li.innerText = liNumber + '. ' + productTitle;
    selectedItemContainer.appendChild(li);

    // set the price to total price
    const price = parseFloat(target.querySelector('.price').innerText.split(' ')[0]);
    total += price;
    // calling the function updateTotal 
    updateTotal();

    const purchaseBtn = document.getElementById('purchase-btn');
    const applyCouponButton = document.getElementById('apply-coupon-btn');
    purchaseBtn.disabled = total <= 0;
    applyCouponButton.disabled = total < 200;

    // if coupon is applied update the discount when adding another card
    if (couponApplied) {
        applyCoupon();
    }
}

// a total price calculation function to get and set the total and grand price
function updateTotal() {
    const firstTotalPrice = document.getElementById('first-total-price');
    const grandTotal = document.getElementById('grand-total-price');
    const discountPrice = document.getElementById('discount-price');

    firstTotalPrice.innerText = total.toFixed(2);
    grandTotal.innerText = (total - parseFloat(discountPrice.innerText)).toFixed(2);
}

// function to clear the coupon field
function clearCouponField() {
    const couponField = document.getElementById('coupon-field');
    couponField.value = '';  // Clear the coupon field
}
// applying coupon code to calculate discount and set the discount
function applyCoupon() {
    const couponField = document.getElementById('coupon-field');
    const discountPrice = document.getElementById('discount-price');
    const showInvalidMsg = document.getElementById('invalid-message');


    if (couponField.value === 'SELL200') {
        const discountMoney = 0.2 * total;
        discountPrice.innerText = discountMoney.toFixed(2);
        showInvalidMsg.style.display = 'none';

    }
    else {
        showInvalidMsg.style.display = 'block';
        discountPrice.innerText = '0.00';
        clearCouponField();
    }

    updateTotal();
}

// add event listener in apply button
document.getElementById('apply-coupon-btn').addEventListener('click', function () {
    applyCoupon();
    couponApplied = true;
});

// go home but when clicked go to home page and refresh data
document.getElementById('go-home-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});
