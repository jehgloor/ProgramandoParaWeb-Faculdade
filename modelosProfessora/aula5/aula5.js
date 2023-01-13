console.log("Trabalhando com vetores (Arrays)")


const listaDeDisciplina = new Array(
    'Tópicos Especiais',
    'Desenvolvimeto Web Básico',
    'Desenvolvimento de Software'
);

// listaDeDisciplina[3] = 'Meio Ambiente'
// tem uma função para colocar 
listaDeDisciplina.push('Meio Ambiente'); 
listaDeDisciplina.push('Engenharia de software');

//splice significa emendar, ( 4 é a posisao , que começa e 1 é a posição q começou para fazer a remoção)
listaDeDisciplina.splice(4,1)

console.log(listaDeDisciplina);



