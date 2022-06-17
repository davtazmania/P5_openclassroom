let products = [];
fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok) {
        return res.json();
    }
})
.then(function(products){
    let items = document.getElementById('items');
    for(let i = 0; i < products.length; i++) {
        items.innerHTML += `<a href="./product.html?id=${products[i].id}">
        <article>
         <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
         <h3 class="productName">${products[i].name}</h3>
         <p class="productDescription">${products[i].description}</p>
        </article>
       </a>`;
       console.log(products[i]);
};
});


console.log(products);

