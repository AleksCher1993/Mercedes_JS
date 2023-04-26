
const featureLinks=document.querySelectorAll('.feature__link')

featureLinks.forEach((link)=>{
    
    
    link.addEventListener('click',()=>{
        let featureSub=link.nextElementSibling
        
        if (link.classList.contains('feature__link_active')) {
            
            featureLinks.forEach(l=>{
                l.classList.remove('feature__link_active')
                l.nextElementSibling.classList.add('hidden')
                
            })  
        }else{
            featureLinks.forEach(l=>{
                l.classList.remove('feature__link_active')
                l.nextElementSibling.classList.add('hidden')
                
            })
            link.classList.add('feature__link_active')
            featureSub.classList.remove('hidden')  
        }
            
            
            
        
    })
   
})