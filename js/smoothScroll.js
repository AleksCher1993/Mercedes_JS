const menuListLinks=document.querySelectorAll('.menu-list__link')
const mainScroll=document.querySelectorAll('.main__scroll')
const mainButton=document.querySelectorAll('.main__button')
const btnsLinks=[...menuListLinks,...mainScroll,...mainButton]
btnsLinks.forEach(link=>{
    link.addEventListener('click',(event)=>{
        event.preventDefault()
        const id=event.target.getAttribute('href').slice(1)
        document.getElementById(id).scrollIntoView({behavior:"smooth",block:'start'})
    })
})