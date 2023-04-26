const menuListLinks=document.querySelectorAll('.menu-list__link')
const mainScroll=document.querySelectorAll('.main__scroll')
const mainButton=document.querySelectorAll('.main__button')

const humburgerMenuBtn=document.querySelector('.humburger-menu')
const menuu=document.querySelector('.menu')

const btnsLinks=[...menuListLinks,...mainScroll,...mainButton]
btnsLinks.forEach(link=>{
    link.addEventListener('click',(event)=>{
        event.preventDefault()
        const id=event.target.getAttribute('href').slice(1)
        document.getElementById(id).scrollIntoView({behavior:"smooth",block:'start'})
        if (humburgerMenuBtn&&menuu) {
            
            humburgerMenuBtn.classList.remove('humburger-menu-active')
            menuu.classList.remove('menu-active')
        }
    })
})