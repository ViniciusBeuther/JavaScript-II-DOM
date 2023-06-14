// Global variables
const form = document.getElementById('devForm')
const addButton = document.getElementById('addTechBtn')
let namingCounter = 0 //Counter to set unique values for id's
const technologies = []
const radioList = []


function createInput(id, type = 'text', name) {
    const newInput = document.createElement('input')
    newInput.id = id
    newInput.type = 'text'
    newInput.name = name
    return (newInput)
}

function createLabel(id, forHTML){
    const newLabel = document.createElement('label')
    newLabel.id = id
    newLabel.for = forHTML
    newLabel.innerText = 'Nome:'
    return (newLabel)
}

function createRadio(id, type = 'radio', name)
{
    const newRadioInput = document.createElement('input')
    newRadioInput.type = 'radio'
    newRadioInput.id = id
    newRadioInput.name = name
    return(newRadioInput)
}

addButton.addEventListener('click', function (ev){
    ev.preventDefault()
    const ul = document.getElementById('stackInputs') //Mapping the tecnologies background

    const techInputName = createInput('technologie-' + namingCounter, 'text', null) // Creating a new text input
    const techLabel = createLabel('labelTechnologie-' + namingCounter, 'labelTechnologie-' + namingCounter) // Creating a new technologie label
    
    const radio0UpTo2 = createRadio('radio0UpTo2-' + namingCounter, 'radio', '0-2 Anos-' + namingCounter) // Creating first radio
    const radio0UpTo2Label = createLabel('radio0UpTo2-' + namingCounter, 'forRadio0UpTo2-' + namingCounter)
    radio0UpTo2Label.innerText = '0-2 Anos'

    const radio2UpTo4 = createRadio('radio2UpTo4-' + namingCounter, 'radio', '2-4 Anos-' + namingCounter)
    const radio2UpTo4Label = createLabel('radio2UpTo4-' + namingCounter, 'forRadio2UpTo4-' + namingCounter)
    radio2UpTo4Label.innerText = '2-4 Anos'

    const radio5Plus = createRadio('radio5Plus-' + namingCounter, 'radio', '5+ Anos-' + namingCounter)
    const radio5PlusLabel = createLabel('radio5Plus-' + namingCounter, 'forRadio5Plus-' + namingCounter)
    radio5PlusLabel.innerText = '5+ Anos'

    
    const removeButton = document.createElement('button') // Create a remove button
    removeButton.innerText = 'Remover'
    removeButton.addEventListener('click', function (){ 
        ul.removeChild(techItem) // remove the techItem
    })

    const techItem = document.createElement('li')

    techItem.append(techLabel, techInputName, radio0UpTo2, radio0UpTo2Label, radio2UpTo4, radio2UpTo4Label, radio5Plus, radio5PlusLabel, removeButton)
    
    console.log(techItem) //- Just for test
    ul.append(techItem)
    namingCounter++ 
    
    
})

const registerButton = document.getElementById('registerBtn')
    registerButton.addEventListener('click', function (ev){
    ev.preventDefault()
    const fullname = document.getElementById('fullname')
    technologies.push(fullname.value)

     const technologiesInputValue = document.querySelectorAll('[id^="technologie-"]')
     technologiesInputValue.forEach(function (inputValue, index) {
        technologies.push(inputValue.value)
      })

    const radioInputSelected = document.querySelectorAll('[id^="radio"]:checked');
    
    radioInputSelected.forEach(function (radioElement){
        radioList.push(radioElement.name)
    })

    fullname.value = ''
    
    for (let i = 0; i < namingCounter; i++)
    {
        technologiesInputValue[i].value = ''
        const radioElements = document.querySelectorAll(`[name="${radioList[i]}"]`)
        radioElements.forEach(function (radioElement) {
          radioElement.checked = false
        })
    }
    
    alert(`Desenvolvedor cadastrado!\nINFO:\n${technologies}!`)
})

