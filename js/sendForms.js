const formTestDrive=document.querySelectorAll('.form')
const modall=document.querySelector('.modal')

formTestDrive.forEach(form=>{

    
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
    const formObj={}
    for (const {name,value} of form.elements) {
        if (name) {
            formObj[name]=value
            
        }
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify(formObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (response.status===200||response.status===201) {
            
            return response.json()
        }  else throw new Error(response.status)
    })
      .then(() => {
        alert('Вы успешно отправили')
        modall.classList.add('hidden')
        document.body.classList.remove('body__locked')
        form.reset()
    })
    .catch(error=>{
        alert('Gроизошла ошибка, статус ' + error.message)
    })
    
})
})