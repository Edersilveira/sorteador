
/*
function generateNumber(){ //pega o click do botão
    
    const min = document.querySelector('.input-min').value // pega o que foi digitado no input
    const max = document.querySelector('.input-max').value // pega o que foi digitado no outro input

    console.log(min, max)
}
*/
    function generateNumber(){ //pega o click do botão
    const min = Math.ceil(document.querySelector('.input-min').value) // pega o que foi digitado no input
    const max = Math.floor(document.querySelector('.input-max').value) // pega o que foi digitado no outro input

    if( min >= max){
        alert("O valor minimo tem que ser MENOR que o valor máximo")
    }else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    
    }
}