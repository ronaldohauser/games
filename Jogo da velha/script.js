var sequenciasVencedoras = [
    // Sequências horizontais
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Sequências verticais
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Sequências diagonais
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  var jogadorAtual = "cruz";
  var movimentos = [];
  
  function verificarVencedor() {
    for (var i = 0; i < sequenciasVencedoras.length; i++) {
      var sequencia = sequenciasVencedoras[i];
      var a = movimentos[sequencia[0]];
      var b = movimentos[sequencia[1]];
      var c = movimentos[sequencia[2]];
      
      if (a && b && c && a === b && b === c) {
        return true;
      }
    }
    return false;
  }
  
  function exibirMensagemVencedor() {
    var mensagem = document.createElement("div");
    mensagem.classList.add("mensagem");
    var vencedor = jogadorAtual === "cruz" ? "Cruz" : "Círculo";
    mensagem.textContent = "O jogador " + vencedor + " venceu!";
    document.body.appendChild(mensagem);
  }
  
  function permitirSoltar(event) {
    event.preventDefault();
  }
  
  function arrastar(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function soltar(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    movimentos[event.target.dataset.posicao] = jogadorAtual;
    
    if (verificarVencedor()) {
      exibirMensagemVencedor();
    } else {
      jogadorAtual = jogadorAtual === "cruz" ? "circulo" : "cruz";
    }
  }
  
  function resetarJogo() {
    window.location.reload();
  }
  