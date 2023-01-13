
function fazPost(url,body){
    let request = new XMLHttpRequest();
    //configurar a request:
    request.open("POST" , url, true)
    //content é : tipo : conteudo 
    request.setRequestHeader("Content-type","application/json")
    //pega uma string e garante q ela ta em formato json;
    request.send(JSON.stringify(body));

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}



// faz post 
function cadatraUsuario(){
    // declarar minha url
    const url = 'http://127.0.0.1:3000/login'
    //pegar meus valores do campo html
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('login').value;


    body = {
        "email":email,
        "senha":senha
    }

    fazPost(url,body)
}