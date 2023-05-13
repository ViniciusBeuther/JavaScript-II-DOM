function register(param)
{
    //we can get elements by this way, using element(param).children(get the childrenNode). 
    const username = param.children.username.value
    const password = param.children.password.value
    const passwordConfirmation = param.children.passwordConfirmation.value
    
    
    if (passwordConfirmation === password)
    {
        alert(`O usuario ${username} foi cadastrado com sucesso!`)
        clear(param)
    }
    else
    {
        alert(`As senhas digitadas não são iguais!`)
        clear(param)
    }

    
}

function clear(param){
    const username = param.children.username
    const password = param.children.password
    const passwordConfirmation = param.children.passwordConfirmation

    username.value = ''
    password.value = ''
    passwordConfirmation.value = ''
}
