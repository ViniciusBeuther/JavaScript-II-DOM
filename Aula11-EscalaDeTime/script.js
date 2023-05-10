function clearFields(){
        /* Cleaning fields */
        document.getElementById('player').value = ''
        document.getElementById('position').value = ''
        document.getElementById('number').value = ''
}

function addPlayer() {
    // Getting the input data
    const name = document.getElementById('player').value
    const number = document.getElementById('number').value
    const position = document.getElementById('position').value

    const confirmation = confirm(`Deseja escalar ${name} (${number}) na posição ${position}?`) //Confirmation message

    if (confirmation){
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        
        //Creating a item to append on teamList
        playerItem.id = 'player-' + number
        playerItem.innerText = 'Jogador ' + name + ', numero ' + number + ' na posição ' + position
        
        teamList.appendChild(playerItem)
        clearFields()
    }
    else{
        window.alert('Cancelado!')
        clearFields()
    }
  }
  
  function removePlayer(){
    //Getting the list number to remove
    const numberToRemove = document.getElementById('removeInput').value
    const playerToRemove = document.getElementById('player-'+numberToRemove)

    if (playerToRemove === null){
        window.alert('Erro, esse jogador ainda não foi adicionado!')
        document.getElementById('numberToRemove').value = ''
    }

    const confirmation = confirm(`Deseja remover ${playerToRemove.innerText}?`) //Use variable.innerText to display the content

    if (confirmation){
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
    
  }