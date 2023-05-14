const addButton = document.getElementById('add-tech');
addButton.addEventListener('click', addNewTech);

function addNewTech() {
    const listSection = document.getElementById('techSection');
    const input = document.createElement('input')
    input.type = 'text'

    listSection.appendChild(input)
    alert('clico')
}
