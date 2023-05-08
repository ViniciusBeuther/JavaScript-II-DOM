function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'newLine'
    newLi.innerText = 'Select a new color '

    const newInput = document.createElement('input')
    newInput.type = 'color'
    newInput.name = 'input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}