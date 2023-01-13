
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function clicou(){

    let numero = getRandomInt(1 , 6);

    document.getElementById('imagem').src="img/"+numero+".jpg"
}
