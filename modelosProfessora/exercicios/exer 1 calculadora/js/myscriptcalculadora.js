
function usarSoma(){

    document.getElementById('operador').value = 'somar' // aqui estou alterando o valor do input hidden 
}

function usarSubtracao(){
    document.getElementById('operador').value = 'subtracao'
}

function usarMultiplicacao(){
    document.getElementById('operador').value = 'multiplicacao'
}

function usarDivisao(){
    document.getElementById('operador').value = 'divisao'
}
function calcular(){
            
    var a = document.getElementById('item1').value // value = puxa a input para procurar como numero 
    var b = document.getElementById('item2').value

    var novoA = parseFloat(a) // essa função pesquisei para transformar string em numero , pq antes tava 3+3 dava 33
    var novoB = parseFloat(b) 

    var operador = document.getElementById('operador').value // aqui estou o conteudo da input hidden 

    var result;

    if(operador == 'somar'){
        result = novoA+novoB // operação
    }

    if(operador == 'subtracao'){
        result = novoA-novoB // operação
    }

    if(operador == 'multiplicacao'){
        result = novoA*novoB // operação
    }

    if(operador == 'divisao'){
        result = novoA/novoB // operação
    }
    
    document.getElementById('resultado').innerHTML ='o resultado é :  '+ result
    
}


