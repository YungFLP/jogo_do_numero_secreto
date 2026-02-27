let listaNumeroSort = [];
let numeroLimite = 10 ;
let numSecreto = gerarNumRandom();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto,'Brazilian Portuguese Male',{rate:1.2});

}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarTentativa(){
  let chute = parseInt(document.querySelector('input').value);

  if(chute == numSecreto){

    exibirTextoNaTela('h1',`Você acertou !!`);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');

    return;
    
  }else{
    if(chute > numSecreto){
      exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
      limparCampo();
    }else{
       exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
       limparCampo();
    }

    tentativas++;
  }
}
exibirMensagemInicial();
function exibirMensagemInicial(){

  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
function reiniciarJogo(){

  numSecreto = gerarNumRandom();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);


}
function limparCampo(){

  chute = document.querySelector('input');
  chute.value = '';
}
function gerarNumRandom(){

  let numEscolhido = parseInt(Math.random() * numeroLimite +1);
  let quantidadeLista = listaNumeroSort.length;

  if(quantidadeLista == numeroLimite){
    listaNumeroSort = [];
  }
  if(listaNumeroSort.includes(numEscolhido)){
      return gerarNumRandom();
  }else{
    listaNumeroSort.push(numEscolhido);
    console.log(listaNumeroSort);
    return numEscolhido;
  }

}


