let productsList = [];
fetch('http://localhost:3000/api/products')
.then(function(res){
    if (res.ok) {
        return res.json();
    }
})
.then(function(productsList){
    let items = document.getElementById('items');
    for(let i = 0; i < productsList.length; i++) {
        items.innerHTML += `<a href="./product.html?id=${productsList[i]._id}">
        <article>
         <img src="${productsList[i].imageUrl}" alt="${productsList[i].altTxt}">
         <h3 class="productName">${productsList[i].name}</h3>
         <p class="productDescription">${productsList[i].description}</p>
        </article>
       </a>`;
};
});

