const humburgerMenuButton=document.querySelector('.humburger-menu')
const menu=document.querySelector('.menu')

humburgerMenuButton.addEventListener('click',()=>{
    humburgerMenuButton.classList.toggle('humburger-menu-active')
    menu.classList.toggle('menu-active')
})
