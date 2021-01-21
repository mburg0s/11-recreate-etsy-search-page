const products = items.results

const productHtml = products.map((item)=>{
    // console.log(item.Images[0].url_fullxfull)
    console.log(item.shop_name)
    const itemHtml = `
    <div class="product-item">
    
    
   <div class ='product-bg' style='background-image: url(${item.Images[0].url_fullxfull})'> </div>
    <h2 class ='item-title'>${item.title}</h2>
    <h3 class ='store'>${item.Shop.shop_name}</h3>
    <h4 class = 'price'>$${item.price}</h4> 
    
    </div>
    `
    
    return itemHtml

})

document.querySelector('#grid').innerHTML=productHtml.join('')


