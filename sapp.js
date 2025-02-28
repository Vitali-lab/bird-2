const submenu = document.getElementById('submenu')
const newButton = document.getElementById('new')
const header = document.getElementById('bird')
const arrow = document.getElementById("down")
const busket = document.getElementById('busket')
const busketMenu = document.getElementById('busketMenu')
const closeBusket = document.getElementById('closeBusket')
const logoAni = document.getElementById('header__img')
const blankButton = document.getElementById ('item-button')
const element = document.getElementById('newFranch')
const element2 = document.getElementById ('franch__items')
const filterButtons = document.getElementsByClassName('title-button')
const pageOne = document.getElementById('pageOne')
const origButton = document.getElementById('origPictures')
const origBlock = document.getElementById('origPic')
const body = document.querySelector('body')
const buttonClose = document.getElementById ('buttonClose')
const busketNot = document.getElementById('busketNot')
const buttonFranch = document.getElementById('buttonFranch')

isMenuOpen = false
function openSubMenu () {
   if(isMenuOpen) {
submenu.style.transform = 'rotateX(-90deg)'

} else {
submenu.style.transform = 'rotateX(0deg)'
}  
isMenuOpen = !isMenuOpen

if(isMenuOpen === true) {
    arrow.style.transform = 'rotate(180deg)'
    arrow.style.transition = 'transform 0.3s ease'
} else {
    arrow.style.transform = 'rotate(0deg)'
    arrow.style.transition = 'transform 0.3s ease'
}
}


newButton.addEventListener('click', openSubMenu)


const shop = document.getElementById('shops')

function obenBusket () {
    // shop.style.transform = 'rotate(-50deg)'
   let race = () => {
    shop.classList.add('bounce-out-right') 
    shop.classList.remove('bounce-in-right') 
    
    // shop.style.transform = 'translateX(1000px)'
   
    // shop.style.transition = 'transform 3s ease'
}
    let birdRace = () => {
    header.style.opacity  = '0'
    header.style.transition = 'all 2s ease'
}
    let busketGo = () => {
    busket.style.transform = 'rotateX(0deg)'
    busket.style.transition = 'transform 1.5s ease'
    
    
}
    let busketMenuGo = () => {
        busketMenu.style.transform = 'rotateX(0deg)'
       
        busketMenu.style.transition = 'transform 1.3s ease'
}
   
   
    setTimeout (race, 100)
    setTimeout (birdRace, 300)
    setTimeout (busketGo, 1700)
    setTimeout (busketMenuGo, 1000)
    
}   
shop.addEventListener('click', obenBusket)

let rotate = 0
let logoAnimation = () => {
    rotate += 360
    logoAni.style.transform = `rotateY(${rotate}deg)`
    logoAni.style.transition = 'transform 1s ease'

   
}
setInterval (logoAnimation, 10000)

// let logoAnimation2 = () => {
//     logoAni.style.transform = 'rotateY(180deg)'
//     logoAni.style.transition = 'transform 1.3s ease'
// }
// setInterval (logoAnimation2, 3000)


function closeBuskets () {
    busket.style.transform = 'translateX(-900px)'
    busket.style.transition = 'transform 1s ease'
    let closeBusketMenu = () => {
    busketMenu.style.transform = 'rotateX(-90deg)'
    busketMenu.style.transition = 'transform 0.5s ease'   
    }
    let race = () => {   
        shop.classList.add('bounce-in-right')
        shop.classList.remove('bounce-out-right') 
        // shop.style.transform = 'rotateX(0deg)'
        // shop.style.transition = 'transform 2s ease'
    }
    let birdRace = () => {
        header.style.opacity  = '1'
        header.style.transition = 'all 2s ease'
    }
      
   

    setTimeout (closeBusketMenu, 200)
    setTimeout (race, 800)
    setTimeout (birdRace, 400)

}


buttonClose.addEventListener ('click', closeBuskets)

busket.addEventListener ('click', closeBuskets)

function dinamicHeader() {
    let isDown = false
    setInterval (() => {
        if(isDown) {
          header.style.transform = 'translateY(-20px)'  
        } else {
            header.style.transform = 'translateY(20px)'  
        }
        header.style.transition = 'transform 8s ease'
        isDown = !isDown
    }, 3000)
}
dinamicHeader()


const arrowProduct = {
    product: [
        {
          id: 1,
          writerName: 'Марсель Руссо',
          title: 'Охота Амура',
          img: 'img/03.jpg',
          category: 'fran',
          desc: 'Холст, масло (50х80) ',
          price: 14500
        },
        {
            id: 2,
            writerName: 'Анри Селин',
            title: 'Дама с собачкой',
            img: 'img/dama.jpg',
            category: 'eng',
            desc: 'Акрил, бумага (50х80) ',
            price: 16500
          },
          {
            id: 3,
            writerName: 'Франсуа Дюпон',
            title: 'Процедура',
            img: 'img/proc.jpg',
            category: 'ger',
            desc: 'Бумага, акрил (50х80) ',
            price: 20000
          },
          {
            id: 4,
            writerName: 'Луи Детуш',
            title: 'Роза',
            img: 'img/rose.jpg',
            category: 'fran',
            desc: 'Цветная литография (40х60) ',
            price: 12000
          },
          {
            id: 5,
            writerName: 'Франсуа Дюпон',
            title: 'Птичья трапеза',
            img: 'img/birds.jpg',
            category: 'fran',
            desc: 'Цветная литография (40х60) ',
            price: 22500
          },
          {
            id: 6,
            writerName: 'Пьер Моранж',
            title: 'Пейзаж с рыбой',
            img: 'img/fish.jpg',
            category: 'fran',
            desc: 'Цветная литография (40х60) ',
            price: 20000
          },
            
            
      ],

}


let cart = []
function addToCart(product) {
    cart.push(product)
}

function delToCart(item) {
  let index =  cart.findIndex(cartItem => cartItem.id === item.id  )
  
    if(index !== -1) {
        cart.splice(index, 1)
        updateCartUI();
        cartNotif()
    }  

}

function cartNotif() {
        
    if(cart.length < 1) {
        console.log (cart.length)
        busketNot.style.opacity = '0'
        busketNot.textContent = ' '
    } else {
        busketNot.style.opacity = '1'
        busketNot.textContent = cart.length
    }
}



function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        
        const card =
        document.createElement('div')
        card.className = 'cart-card'
    
        const img = 
        document.createElement('img')
        img.src = item.img
    
        const writerName = 
        document.createElement('p')
        writerName.textContent = item.writerName
    
        const title = 
        document.createElement('h2')
        title.textContent = item.title
        
        const desc = 
        document.createElement('p')
        desc.textContent = item.desc
    
        const price = 
        document.createElement('b')
        price.textContent = `${item.price} руб`

        const buttonDel = 
        document.createElement('button')
        buttonDel.innerHTML = '<i class="fa-regular fa-circle-xmark fa-2xl" style="color: #0d0d0c;"></i>' 
        buttonDel.addEventListener('click' , function () {
            delToCart(item)
            updateCartUI()
            
        })

        const fullPrice = document.createElement('div')
        fullPrice.className = 'fullPrice'
        fullPrice.innerHTML = ''
        let sum = cart.reduce((accumulator, currentItem) => currentItem.price + accumulator, 0
        )
        fullPrice.textContent = `Всего цена:  ${sum} руб.`

        

        cartItems.appendChild(fullPrice)
        
         

        
    card.appendChild(buttonDel)    
    card.appendChild(img)
    card.appendChild(writerName)
    card.appendChild(title)
    card.appendChild(desc)
    card.appendChild(price)
    cartItems.appendChild(card)
    });

    cartNotif()
}





cart.forEach(item => {
    

    const li = 
    document.createElement('li')
    li.textContent = `${item.title} ${item.price} руб.`

    cartItems.appendChild(img)
    cartItems.appendChild(li)
    
    
})



const productContainer = 
document.getElementById('product-container')

arrowProduct.product.forEach(product => {
    const card =
    document.createElement('div')
    card.className = 'product-card'

    const img = 
    document.createElement('img')
    img.src = product.img

    const writerName = 
    document.createElement('p')
    writerName.textContent = product.writerName

    const title = 
    document.createElement('h2')
    title.textContent = product.title
    
    const desc = 
    document.createElement('p')
    desc.textContent = product.desc

    const price = 
    document.createElement('b')
    price.textContent = `${product.price} руб`

    

    const button = 
    document.createElement('button')
    button.className = 'buttonSale'
    button.textContent = 'В корзину'
    button.addEventListener('click', () => {
        addToCart(product);
        updateCartUI();

        const notification = 
    document.createElement('div')
    notification.className = 'notificationCart'

    const notificationInfo = 
    document.createElement ('p')
    notificationInfo.innerHTML = `Товар "${product.title}" добавлен в корзину! <br/> <p><p/> Всего ${cart.length} шт. в корзине.`
        
        function notificationUp () {
            notification.style.opacity = '0'
            notification.style.transition = 'all 1s ease'
        }
        function notificationDisplayNone () {
            notification.style.display = 'none'
        }
        setTimeout(notificationUp, 1000)
        setTimeout(notificationDisplayNone, 2000)


        notification.appendChild(notificationInfo)
        body.appendChild(notification)

       


        button.textContent = 'Товар добавлен в корзину'

        function cartnot () {
            button.textContent = 'В корзину' 
            
        }
        setTimeout(cartnot, 500)

       
    

    });
    

    

    card.appendChild(img)
    card.appendChild(writerName)
    card.appendChild(title)
    card.appendChild(desc)
    card.appendChild(price)
    card.appendChild(button)
    


    productContainer.appendChild(card)


    img.addEventListener('click', () => {
        const card = 
        document.createElement('div')
        card.className = 'showBigImg'
    
        const img = 
        document.createElement('img')
        img.src = product.img
    
        const buttonOut = 
        document.createElement('button')
        buttonOut.innerHTML = '<i class="fa-regular fa-circle-xmark fa-2xl" style="color:rgba(0, 0, 0, 0.86);"></i>'
        
        

        img.style.border = '3px solid black'
        img.style.transition = 'all 1s ease'

        
        
        card.appendChild(img)
        card.appendChild(buttonOut)
        body.appendChild(card)

        buttonOut.addEventListener('click', function () {
           card.style.display = 'none'

        
        })
    
    })




})


// filterButtons.forEach(() => {
//     button.addEventListener('click', () => {
//         filterButtons.forEach(btn => btn.classList.remove('active'))
//         button.classList.add('active')

//         const filter = product.category

//         product.forEach(product => {
//             const category = product.category
//         }
            
//     )
//     })
// })



blankButton.addEventListener('click', function () {
   let el1 = element.style.display = 'none'
   let el2 = element2.classList.add("bounce-in-left")
   element2.classList.remove('franch__items')
   
})

origButton.addEventListener('click', function () {
    pageOne.classList.add('bounce-out-right')

    const showOrigBlock = () => {
        origBlock.style.display = 'block'
    }
setTimeout(showOrigBlock, 1000)
})




let lastScrollTop = 0; 
const header1 = document.getElementById('header');

window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  
  if (currentScroll > lastScrollTop) {
    header1.style.top = '-100px'; 
  } else {
    header1.style.top = '0'; 
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
