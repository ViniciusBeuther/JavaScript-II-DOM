const valueBtn = document.getElementById('value')
const typeBtn = document.getElementById('type')
const inputField = document.getElementById('input')
let count = 0

valueBtn.addEventListener('click', function () {
    inputField.value = 'Hello world...'
    console.log(inputField.value)
    console.log(inputField.getAttribute('value'))
})

typeBtn.addEventListener('click', function(){
    console.log(count)
    if (count%2 == 0){
        //inputField.type = 'radio'
        inputField.setAttribute('type', 'radio')
    }
    else {
        inputField.type = 'text'
    }
    count++
})

const btnDisable = document.getElementById('disable').addEventListener('click', function (){
        inputField.disabled = 'true'       
})
