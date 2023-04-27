const formTestDrive=document.querySelector('.form-test-drive')
formTestDrive.addEventListener('submit',(event)=>{
    event.preventDefault()
    const formObj={}
    for (const {name,value} of formTestDrive.elements) {
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
        formTestDrive.reset()
    })
    .catch(error=>{
        alert('Gроизошла ошибка, статус ' + error.message)
    })
    
})