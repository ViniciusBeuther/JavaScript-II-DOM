function addContact(){
    const contactSection = document.getElementById('contacts')
    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    /*Creating ul element to append fields*/
    const ul = document.createElement('ul')
    
    /* Add name input */
    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    /* Add Address line input*/
    const addressLi = document.createElement('li')
    addressLi.innerText = 'Endereço: '
    const addressInput = document.createElement('input')
    addressInput.name = 'address'
    addressInput.type = 'text'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)

    /* Add phone number input */
    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    /* Grouping all those fields and displaying in screen the new group*/
    contactSection.append(h3, ul)   
}

function removeContact(){
    contactSection = document.getElementById('contacts')
    
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[0]) // We can set the position to remove, use variableName.lenght - 1 to remove the last element in UL
    contactSection.removeChild(contacts[0])
    
}