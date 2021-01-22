
const productEtsy = items.results.map((item) => {
 
    // const itemEtsy =
    return  `
    <div class="product-item">
        <div>
            <img src ="${item.Images[0].url_fullxfull}" class ='img-bg'>
            <p class ='item-title'>${item.title}<p>
            <p class ='store'>${item.Shop.shop_name}</p>
            <p class ='store'>★★★★★ (${item.views})</p>
            <h4 class = 'price'>$${item.price}</h4> 
        </div>  
    </div>
    `
    
    // return itemEtsy

})

document.querySelector('#grid').innerHTML=productEtsy.join('')


const menuOption = ['Valentines Day', 'Jewelry & Accesories',
'Clothing & Shoes', 'Home & Living', 'Wedding & Party', 'Toys & Entertainment',
'Art & Collectibles','Craft Supplies', 'Gifts & GiftCards']


const menuBar = menuOption.map((item) => {
    console.log(item)    
    return `
        <li><a href="#" class="nav-link">${item}</li>    
        `

})
document.querySelector('#menu-bar').innerHTML=menuBar.join('')