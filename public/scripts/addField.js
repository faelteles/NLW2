// Procurar o botao
document.querySelector("#add-time")//quando o elemento add-time for selecionado

//Quando clicar no botao
.addEventListener('click', cloneField) // o evento será click, a função será cloneField
//Executar uma acao
function cloneField(){
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// coloco true para ele pegar schedule e o que tem dentro dela

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar 
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
            field.value = ""
    })
    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // colocar como filho de schedule-items

}