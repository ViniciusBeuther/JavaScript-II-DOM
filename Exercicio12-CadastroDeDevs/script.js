function createLabel(text, htmlFor){    //htmlFor we use the take the for='' in label tag
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, name, type = 'text', value = '', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.type = type
    input.value = value
    input.placeholder = placeholder
    return input
}

const addNewTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const devs = []
let inputRows = 0
let radioCount = 0

addNewTechBtn.addEventListener('click', function (ev){
    stackInputs = document.querySelector('#stackInputs')
    br = document.createElement('br')
    //Creating a new row
    newLi = document.createElement('li')
    newLi.id = "newLi-" + inputRows
    newLi.className = 'newLi-' + inputRows
    inputRows++

    const newLabel = createLabel('Nome: ', 'newLi-' + inputRows)
    const techNameInput = createInput('newLabel-' + inputRows,null,'newLabel')

    console.log(newLi, newLabel)
    stackInputs.append(newLabel, techNameInput, br)

    //Creating radio input #1   
    const newRadioLabel = createLabel('0-2 anos', 'radio-'+radioCount)
    const newRadioInput = createInput('radio-' + radioCount,null,'radio')
    
    //Creating radio input #2
    const newRadioInput2 = 


    radioCount++
    stackInputs.append(newLabel,techNameInput,newRadioInput, newRadioLabel)
})

