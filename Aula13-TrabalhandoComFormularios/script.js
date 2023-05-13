const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault() //Make with the form don't restart/clear when the submit is done

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salad += ' - ' + item.value + '\n'
    }) //:checked is to select all the checked itens, with .forEach we can catch everytime that
        //the conditionall match.
    
    console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations})

    alert('Pedido realizado com sucesso!')
    alert(`Nome: ${name}\nEndereço: ${address}\nTipo de pão: ${breadType}\nHamburguer: ${main}\nSalada:\n${salad}\nObservações: ${observations}`)
    clear(name, address, breadType, main, observations)
    
})

function clear (name, address, breadType, main, observations){
    observations = document.querySelector('textarea[name="observations"]').value = ''
    name = document.querySelector('input[name="name"]').value = ''
    address = document.querySelector('input[name="address"]').value = ''
    breadType = document.querySelector('select[name="breadType"]').value = ''
    main = document.querySelector('input[name="main"]').value = ''
}