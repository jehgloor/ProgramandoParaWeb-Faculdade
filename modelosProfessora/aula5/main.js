const resposta = document.querySelector('#tabuada1')

function tabuada() {
  let num = document.getElementById("num").value;
  let valor = parseInt(num);

  for (let cont = 0; cont <= 10; cont++) {
    document.write(`${valor} x ${cont} = ${valor * cont} <br>`);
  }
}

