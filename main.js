
const productEtsy = items.results.map((item) => {
 
    return  `
    <div class="product-item">
        <div>
            <div id ="grid-pic">
                <a href="${item.url}" target = blank><img src ="${item.Images[0].url_fullxfull}" class ='img-bg'></a>             
                <div id="div-heart">
                    <span class ="fa fa-heart" id ="img-heart"> </span>
                </div>
            </div>
            
            <a href="${item.url}" target = blank class ='item-title'>${item.title}</a>
            <p><a href="${item.Shop.url}" target = blank class ='store'>${item.Shop.shop_name}</a></p>
            <p class ='store'><a href="${item.url}" target = blank class ='item-title'>★★★★★ (${item.views})</a></p>
            <a href="${item.url}" target = blank class ='item-title'><h4 class = 'price'>$${item.price}</h4></a>
        </div>  
    </div>
    `
    

})

document.querySelector('#grid').innerHTML=productEtsy.join('')

document.querySelector('#count').innerHTML=`${items.count} results, with Ads`

// const menuOption = ['Valentines Day', 'Jewelry & Accesories',
//  'Clothing & Shoes', 'Home & Living', 'Wedding & Party', 'Toys & Entertainment',
//  'Art & Collectibles','Craft Supplies', 'Gifts & GiftCards']

//  const menuOption =[
//  {"menu_name":'Valentines Day', 
//  "menu_childs":[""]},
//  {"menu_name":'Jewelry & Accesories', 
//  "menu_childs":["Bags","Hello","Hello again","Hello again"]}
// ]


// 'Jewelry & Accesories',
// 'Clothing & Shoes', 'Home & Living', 'Wedding & Party', 'Toys & Entertainment',
// 'Art & Collectibles','Craft Supplies', 'Gifts & GiftCards'



// const menuBar = menuOption.map((item) => {
//     return `       
//         <div class = "dropdown">
//         <li><a href="#" class="nav-link">${item}</li>    
            
//             </div>      
//             `
// }
    // console.log(item.menu_name,item.menu_childs)
//  )
// document.querySelector('#menu-bar').innerHTML=menuBar.join('')
// document.querySelector('#menu-content').innerHTML=menuBar.join('')

