let params = new URL(document.location).searchParams;

let productId = params.get("id");

let title = document.getElementById("title");
let imageUrl = document.querySelector(".item__img");
let prix = document.getElementById("price");
let description = document.getElementById("description");
let selectColor = document.querySelector("colors");
let quantity = document.getElementById("quantity");

fetch('http://localhost:3000/api/products')
.then(function(product){

})
