
const featureLinks=document.querySelectorAll('.feature__link')
const featureLinksIter=(link)=>{
    link.forEach(l=>{
        l.classList.remove('feature__link_active')
        l.nextElementSibling.classList.add('hidden')
        
    }) 
}
featureLinks.forEach((link)=>{
    
    
    link.addEventListener('click',()=>{
        let featureSub=link.nextElementSibling
        
        if (link.classList.contains('feature__link_active')) {
            featureLinksIter(featureLinks)
              
        }else{
            featureLinksIter(featureLinks)
            link.classList.add('feature__link_active')
            featureSub.classList.remove('hidden')  
        }
            
            
            
        
    })
   
})