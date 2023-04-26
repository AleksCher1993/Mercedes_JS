const moreBtn=document.querySelectorAll('.more')
const modal=document.querySelector('.modal')
moreBtn.forEach((btn)=>{

    btn.addEventListener('click',()=>{
        modal.classList.remove('hidden')
        document.body.classList.add('body__locked')
    })
})
modal.addEventListener('click',(event)=>{
    const target=event.target
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    document.body.classList.remove('body__locked')
        
    }
})