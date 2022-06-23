// recuperation de l'id
let params = new URLSearchParams(document.location.search);
let productId = params.get("id");
let productList = []


//infos des canapés 
let title = document.getElementById("title");
let imageUrl = document.querySelector(".item__img");
let prix = document.getElementById("price");
let description = document.getElementById("description");
let selectColor = document.querySelector("#colors");
let quantity = document.getElementById("quantity");

  




//fetch permet de recuperer les infos d'un seul poduit 
fetch("http://localhost:3000/api/products/" + productId)
.then(function(res){
    if (res.ok) {
        return res.json();
    } 

}).then(function(product){
    console.log(product);
    title.innerText = product.name;
    prix.innerText = product.price;
    description.innerText = product.description;
    imageUrl.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
    for (let i = 0; i < product.colors.length; i++){
        let colorsOption = document.createElement("option");
        console.log(product.colors);
        colorsOption.setAttribute("value", product.colors[i]);
        colorsOption.innerHTML = product.colors[i];
        selectColor.appendChild(colorsOption);
    }
})


