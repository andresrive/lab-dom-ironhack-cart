// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity input").value

  console.log(typeof price)
  console.log(quantity)

  let priceXQty = price * quantity

  subTotal = product.querySelector(".subtotal span")

  console.log(subTotal)

  subTotal.innerHTML = priceXQty

  return priceXQty
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0
  let products = document.getElementsByClassName("product")

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
  }


  // ITERATION 3

  //SE PUEDE HACER UN SOLO LOOP
  //  for (let i = 0; i < products.length; i++) {
  //   totalPrice += updateSubtotal(products[i])
  // }


  for (let i = 0; i < products.length; i++) {
    totalPrice += updateSubtotal(products[i])
  }
  console.log(totalPrice)

  let totalResult = document.querySelector("#total-value span")

  totalResult.innerHTML = totalPrice


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);



}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
