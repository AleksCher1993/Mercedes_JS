
const tabsHandlerElems=document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems=document.querySelectorAll('[data-tabs-field]')

tabsHandlerElems.forEach(elem=>{
    elem.addEventListener('click',()=>{
        tabsHandlerElems.forEach(el=>el.classList.remove('design-list__item_active'))
        elem.classList.add('design-list__item_active')
        tabsContentElems.forEach(content=>{
            if (content.dataset.tabsField === elem.dataset.tabsHandler) {
                content.classList.remove('hidden')
            }else{
                content.classList.add('hidden')

            }
        })
        
    })
})