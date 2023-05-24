const addButton = document.getElementById('add-tech')
addButton.addEventListener('click', addNewTech)

function addNewTech(ev) {
  ev.preventDefault()

  const ul = document.getElementById('techList')
  const username = document.createElement('input')
  const techLabel = document.createElement('label')
  const breakLine = document.createElement('br')

  //New txt input
  techLabel.innerText = 'Digite uma tecnologia\n'

  //Creating the elements
  const radioInput = document.createElement('input')
  const newTechItem = document.createElement('li')
  const radio2years = document.createElement('input')
  const radio5years = document.createElement('input')

  //Creating labels
  const radioLabel = document.createElement('label')
  const radio2yearsLabel = document.createElement('label')
  const radio5yearsLabel = document.createElement('label')

// Defining type of inputs
  radio5years.type = 'radio'
  radio2years.type = 'radio'
  radioInput.type = 'radio'


  radioLabel.innerText = '0-2 anos'
  radio2yearsLabel.innerText - '3-4 anos'
  radio5yearsLabel.innerText = '5+ anos'
  

  newTechItem.append(techLabel, username, radioInput, radioLabel, radio2years, radio2yearsLabel, radio5years, radio5yearsLabel, breakLine)
  
  ul.appendChild(newTechItem)
}
