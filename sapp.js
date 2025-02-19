const submenu = document.getElementById('submenu')
const newButton = document.getElementById('new')
const header = document.getElementById('bird')
const arrow = document.getElementById("down")
const busket = document.getElementById('busket')
const busketMenu = document.getElementById('busketMenu')
const closeBusket = document.getElementById('closeBusket')

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
    shop.style.transform = 'rotate(-50deg)'
   let race = () => {
    shop.style.transform = 'translateX(1000px)'
   
    shop.style.transition = 'transform 3s ease'
}
    let birdRace = () => {
    header.style.opacity  = '0'
    header.style.transition = 'all 1.5s ease'
}
    let busketGo = () => {
    busket.style.transform = 'translateX(-15px)'
    busket.style.transition = 'transform 1.5s ease'  
}
    let busketMenuGo = () => {
        busketMenu.style.transform = 'translateX(0px)'
        busketMenu.style.transition = 'transform 1.3s ease'
    }

    setTimeout (race, 400)
    setTimeout (birdRace, 500)
    setTimeout (busketGo, 2200)
    setTimeout (busketMenuGo, 1500)
}   
shop.addEventListener('click', obenBusket)

function closeBuskets () {
    busket.style.transform = 'translateX(-900px)'
    busket.style.transition = 'transform 1s ease'
    let closeBusketMenu = () => {
    busketMenu.style.transform = 'translate(-5000px)'
    busketMenu.style.transition = 'transform 4s ease'   
    }
    let race = () => {   
        shop.style.transform = 'translateX(0px)'
        shop.style.transition = 'transform 2s ease'
    }
    let birdRace = () => {
        header.style.opacity  = '1'
        header.style.transition = 'all 2s ease'
    }
      


    setTimeout (closeBusketMenu, 700)
    setTimeout (race, 1000)
    setTimeout (birdRace, 1900)

}


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
