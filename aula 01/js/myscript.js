function transferir (){

    
    var x = document.getElementById('texto').textContent 
    

    document.getElementById('copia').innerHTML = '*Mara'+ x 
}

function ligaLampada(){
    document.getElementById('lampada').src = "./img/pic_bulbon.gif" // coloquei o ./ antes do nome da imagem pq a imagem estava numa pasta anterior
} // o src por conta que tem que carregar uma imagem

function apagaLampada(){
    document.getElementById('lampada').src = "./img/pic_bulboff.gif"
}

function aumentaFonte(){
    document.getElementById('parestilo').style.fontSize = '50px'
}

function mudaCor(){
    document.getElementById('parestilo').style.color = 'red'
}

function mudaAlinhamento(){
    document.getElementById('parestilo').style.textAlign = 'center'
}


function calcular(){
    var a = document.getElementById('item1').innerHTML // procurar como numero 
    var b = document.getElementById('item2').innerHTML
    var c = parseInt(a)
    var d = parseInt(b)
    document.getElementById('resultado').innerHTML ='o resultado é'+ c 

}
