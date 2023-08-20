let total = 0;

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

   // enable or disable purchase button and coupon button
   var purchaseBtn = document.getElementById('purchase-btn');
   var applyCouponButton = document.getElementById("apply-coupon-btn");
   
   purchaseBtn.disabled = total <= 0;
   applyCouponButton.disabled = total < 200;

}

// go home but when clicked go to home page and refresh data
document.getElementById('go-home-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
})

// get the total and set
const firstTotalPrice = document.getElementById('first-total-price');
firstTotalPrice.innerText = total.toFixed(2);

// get the grand total and set
const grandTotal = document.getElementById('grand-total-price');
grandTotal.innerText = parseFloat(firstTotalPrice.innerText).toFixed(2);

// applying coupon code to calculate discount
// add event listener in apply button
document.getElementById('apply-coupon-btn').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-field');
    // get the discount price 
    const discountPrice = document.getElementById('discount-price');
    var grandTotal = document.getElementById('grand-total-price');
    var firstTotalPrice = document.getElementById('first-total-price');
    // validation of coupon code
    if (couponField.value === 'SELL200') {
        // calculating the discount price 
        const discountMoney = parseFloat(firstTotalPrice.innerText) * 0.2;
        discountPrice.innerText = discountMoney.toFixed(2);

        // calculating grandTotal
        grandTotal.innerText = (total - discountMoney).toFixed(2);
        
    }
    else {
        alert('Please enter valid coupon code');
        discountPrice.innerText = '0.00';
        grandTotal.innerText = total.toFixed(2);
    }
    // clearing the coupon input field
    couponField.value = '';

})