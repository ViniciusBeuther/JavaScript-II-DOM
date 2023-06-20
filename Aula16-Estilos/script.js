function darkTheme ()
{
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#F9F9F9'
}

function lightTheme ()
{
    document.body.style.backgroundColor = '#F9F9F9'
    document.body.style.color = '#212529'
}


function switchMode ()
{
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-red')
}

const lightButton = document.getElementById('lightBtn')
const darktButton = document.getElementById('darkBtn')
const switchButton = document.getElementById('switchBtn')

lightButton.addEventListener('click', lightTheme)
darktButton.addEventListener('click', darkTheme)
switchButton.addEventListener('click', switchMode)