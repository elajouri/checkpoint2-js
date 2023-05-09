let input = document.querySelector('input')
let button = document.querySelector('button')

function verificaNota(){
    if(input.value >= 0 && input.value <= 10){
        if(input.value < 5){
            alert("reprovado");
        } else if (input.value < 6){
            alert("exame");
        } else {
            alert("aprovado!");
        }
    } else {
        input.value= "";
        alert("nota inválida!");
    }
}

button.onclick = verificaNota;