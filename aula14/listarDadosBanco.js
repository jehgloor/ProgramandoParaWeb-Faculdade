function fazGet(url){
    let request = new XMLHttpRequest
    //get é false
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function criaLinha(dados){
    let linha = document.createElement("tr");
    let colunaID = document.createElement("td");
    let colunaEmail = document.createElement("td");

    colunaID.innerHTML = dados.id_login_pk;
    colunaEmail.innerHTML = dados.email

    linha.appendChild(colunaID)
    linha.appendChild(colunaEmail);

    return linha;

}
function main(){
    let dados = fazGet("http://127.0.0.1:3000/login")
    //pegar o componente inteiro da tabela do html
    let tabela = document.getElementById('table')
    let usuarios = JSON.parse(dados);
    usuarios.forEach(element =>{
       let linha = criaLinha(element);
       tabela.appendChild(linha);
    });

}






main();