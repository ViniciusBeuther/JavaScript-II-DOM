function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const contactTagName = document.getElementsByTagName('label')
    console.log(contactTagName)

    const contactClass = document.getElementsByClassName('contact-input')
    console.log(contactClass)

    const contactByName = document.getElementsByName('contact2')
    console.log(contactByName)

    const contactByQueryAll = document.querySelectorAll('#contact-list > li > .contact-input')
    console.log(contactByQueryAll)

    const contactByQuerySelector = document.querySelector('#contact3')
    console.log(contactByQuerySelector)
}