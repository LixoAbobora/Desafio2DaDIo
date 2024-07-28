//Função que calcula o saldo de partidas Rankeadas e retorna o nível do jogador.
function calcularNivel(vitorias, derrotas){
    let saldoVitorias =vitorias -derrotas;
    let nivel;
  
    if(vitorias <10)
    {nivel = "Ferro";} 
    
    else if(vitorias >=10 && vitorias <=20) 
    {nivel ="Bronze";}
    
    else if(vitorias >20 && vitorias <=50)
    {nivel ="Prata";}
    
    else if(vitorias >50 && vitorias <=80) 
    {nivel ="Ouro";}
    
    else if(vitorias >80 && vitorias <=90)
    {nivel ="Diamante";}
    
    else if(vitorias >90 && vitorias <=100)
    {nivel ="Lendário";}
    
    else{nivel ="Imortal";}
  return{saldoVitorias,nivel};
  }
  //Solicita a quantidade de vitórias e derrotas do jogador.
  let vitorias =parseInt(prompt("Digite a quantidade de vitórias do jogador:"));
  let derrotas =parseInt(prompt("Digite a quantidade de derrotas do jogador:"));
  //Chama a função e armazena o resultado em uma variável.
  let resultado =calcularNivel(vitorias, derrotas);
  //Exibe a mensagem com o saldo de Rankeadas e o nível do jogador.
  alert(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);