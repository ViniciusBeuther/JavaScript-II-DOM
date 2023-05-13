const button2Remove = document.getElementById('btn-remove')
button2Remove.addEventListener('mouseenter', onEnter)

const button = document.getElementById('btn-register')
button.addEventListener('click', register)

//We use ev or event when we're going to work with events, like remove a event or add
//we dont need to use in HMTL onClick = "function", we can use JS to do that using 
//EventListener, It still waiting up to someone active that event, the sintax is 
//element.addEventListener('eventType', function to call)
//TO remove an event of element, we also can use js, to do this we need to create a function to
//remove, we can use the syntax below:
//elementWithTheEventToRemove(We need to define it out of the functions).removeEventListener('TypeOfEvent', functionThatIsExecuting)

//The logic to use events is:
//1) Get the parent of the element that is calling the function
//2) We use ev.currentTarget.parentNode to this
//3) Then, we now need to map the children that we need to use
//4) we use parentElement(got before).children.ID and we can add a .value after that to grab to current value of the element, like an input value

function register (ev){
    console.log(ev)
    const mainSection = ev.currentTarget.parentNode
    const username = mainSection.children.username.value
    const password = mainSection.children.password.value
    const passwordConfirmation = mainSection.children.passwordConfirmation.value
    
    if (password === passwordConfirmation)
    {
        alert('As senhas conferem!')
        console.log('Senhas oK')
    }

    else
    {
        alert('Senhas nao conferem!')
        console.log('Senhas nao batem!')
    }
}

function onEnter(ev){
    const mainSections = ev.currentTarget.parentNode
    console.log(mainSections)
}

function removeEvent()
{
    button.removeEventListener('click', register)
    button2Remove.removeEventListener('mouseenter', onEnter)
    alert('Events removed')
}

