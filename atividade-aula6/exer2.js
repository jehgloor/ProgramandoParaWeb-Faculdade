function editar(){
    let linha = document.getElementById('linha').value;
    console.log('L: ',linha);

    let coluna = document.getElementById('coluna').value;
    console.log('C: ', coluna)

    let conteudo = document.getElementById('conteudo').value;
    console.log('Conteu: ', conteudo);


    // coloquei na posisão 0 pq no navegador estava aparecendo o tbody (para acessar os filhos)
    let tbody = document.getElementById('tabela').children[0];
    let linhasTRs = tbody.children; // as minhas linhas 
    
    // let elementoAEditar = linhasTRs[7].children[1];

    // elementoAEditar.innerHTML = 'ola mundo';

     //console.log();




     let editar = linhasTRs[linha-1].children[coluna-1];
     console.log(editar);

      editar.innerHTML = conteudo;




     //document.querySelector("#tabela tr:nth-child("+linha+") td:nth-child("+coluna+")").innerHTML = conteudo 


}

// ver o q tem na linha 8 [7]

// innerHTML: conteudo 

// td = coluna 
// tr = linhas



