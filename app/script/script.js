const hambergerBtn = document.querySelector('#hambergerButton')
const hambergerMenu = document.querySelector('.hamberger-menu')
hambergerBtn.addEventListener('click', handleHamberger)
function handleHamberger(){
    hambergerBtn.classList.toggle("active")
    if(hambergerBtn.classList.contains("active")){
        hambergerMenu.classList.add("active")
    }
    else{
        hambergerMenu.classList.remove("active")
    }
}



const dropdownMenu = document.querySelectorAll('.dropdown-menu')
dropdownMenu.forEach(menu => {
    menu.addEventListener('click', handleMenu)
})
function handleMenu(event){
    dropdownMenu.forEach(element => {
        element.classList.remove("active")
    })
    event.currentTarget.classList.add("active")
    
}

const dropdownMenuDesktop = document.querySelectorAll('.dropdown-menu-desktop')
const main = document.querySelector('main')
dropdownMenuDesktop.forEach(menu => {
    menu.addEventListener('click', handleMenuDesktop)
})

function handleMenuDesktop(event){
    dropdownMenuDesktop.forEach(element => {
        element.classList.remove("active")
    })
    event.currentTarget.classList.add("active")
    
}

document.addEventListener('click',(event)=>{
    if(event.target.closest(".dropdown-menu-desktop")) return
    dropdownMenuDesktop.forEach(element => {
        element.classList.remove("active")
    })
})









