function verificar(){
    let arrayChave = new Array(3,5,9,12)
    
        let leitura = new Array (parseInt(document.getElementById('in1').value),
                                parseInt(document.getElementById('in2').value),
                                parseInt(document.getElementById('in3').value),
                                parseInt(document.getElementById('in4').value))
    
    let valoresCorretos = ""
    let erros = 0;
    let valoresErrados = ""
    for(let i = 0 ; i < 4;i++){
        let existe = false;
        for(let j = 0 ; j < 4 ;j++){
            if(leitura[i]==arrayChave[j]){
                valoresCorretos = valoresCorretos + `${leitura[i]} -`
                existe = true;
                break;
            }   
        }
        if(!existe){
            valoresErrados = valoresErrados + `${leitura[i]} -`
            erros = erros + 1;
        }
    }
        if(erros == 4){
            //aqui só quis deixar verdinho , que é a cor do sucesso
            //document.body.style.backgroundColor = 'green'

            alert('SUCESSO!!')
        }
        if(erros == 0){
            document.body.style.backgroundColor = 'red'
            alert('Errou todos')
        }
        document.getElementById('resultado').innerHTML = `Você errou ${erros} valores.<br><br>Itens incorretos ${valoresErrados}.<br><br> Itens Corretos ${valoresCorretos}`
}