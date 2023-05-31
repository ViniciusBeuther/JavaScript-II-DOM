function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, name, type = 'text', value = '', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.name = name;
    input.type = type;
    input.value = value;
    input.placeholder = placeholder;
    return input;
}

const addNewTechBtn = document.getElementById('addTechBtn');
const stackInputs = document.querySelector('#stackInputs');
const devs = [];
let inputRows = 0;
let radioCount = 0;

addNewTechBtn.addEventListener('click', function (ev) {
    const br = document.createElement('br');
    const newLi = document.createElement('li');
    newLi.id = "newLi-" + inputRows;
    newLi.className = 'newLi-' + inputRows;

    const newLabel = createLabel('Nome: ', 'newLabel-' + inputRows);
    const techNameInput = createInput('newInput-' + inputRows, null, 'newLabel');
    inputRows++;
    stackInputs.append(newLabel, techNameInput, br);

    const newRadioLabel = createLabel('0-2 anos', 'radio-' + radioCount);
    const newRadioInput = createInput('radio-' + radioCount, 'radio-' + radioCount, 'radio');
    
    const newRadioLabel2 = createLabel('2-4 anos', 'radio2-' + radioCount);
    const newRadioInput2 = createInput('radio2-' + radioCount, 'radio2-' + radioCount, 'radio');
    
    const newRadioLabel3 = createLabel('5+ anos', 'radio3-' + radioCount);
    const newRadioInput3 = createInput('radio3-' + radioCount, 'radio3-' + radioCount, 'radio');
    
    radioCount++;
    
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remover';

    removeButton.addEventListener('click', function() {
        const parentLi = removeButton.parentElement; // access the parent node
        stackInputs.removeChild(parentLi); // remove Li element
    });

    newLi.append(newLabel, techNameInput, newRadioInput, newRadioLabel, newRadioInput2, newRadioLabel2, newRadioInput3, newRadioLabel3, removeButton);
    stackInputs.appendChild(newLi);
});

const submitForm = document.getElementById('registerBtn');
submitForm.addEventListener('click', function (ev) {
    ev.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const techInputs = document.querySelectorAll('[id^="newInput-"]');
    const technologiesList = [];

    techInputs.forEach(input => {
        technologiesList.push(input.value);
    });

    const radioInputList = document.querySelectorAll('input[type="radio"]:checked');

    radioInputList.forEach(input => {
        technologiesList.push(input.value);
    });

    alert(`DEV CADASTRADO!\nNome: ${fullname} Technologies: ${technologiesList}`);

    
    const addedRows = document.querySelectorAll('[class^="newLi-"]');
    addedRows.forEach(row => {
        row.remove();
    });

    document.getElementById('fullname').value = ''
});
