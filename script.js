function pegarValor() {
    var inicio = document.getElementById('inicio').value
    var final = document.getElementById('final').value
    var passos = document.getElementById('passos').value
  
    inicio = parseInt(inicio)
    final = parseInt(final)
    passos = parseInt(passos)

    // VERIFICAR SE OS VALORES SÃO VALIDOS

    if (inicio === '' || final === '' || passos === '') {
        window.alert('Por favor, preencha todos os campos')
    }else if (inicio === 0 || final === 0 || passos === 0){
        window.alert('Por favor, preencha todos os campos')
    }
  
    var resultadoDiv = document.getElementById("resultado")
  
    if (inicio < final) {
      while (inicio <= final) {
        var novoSpan = document.createElement("span");
        novoSpan.textContent = inicio
        resultadoDiv.appendChild(novoSpan)
        resultadoDiv.appendChild(document.createTextNode(" "))
        inicio = inicio + passos;
      }
    } else if (inicio > final) {
      while (inicio >= final) {
        var novoSpan = document.createElement("span");
        novoSpan.textContent = inicio;
        resultadoDiv.appendChild(novoSpan)
        resultadoDiv.appendChild(document.createTextNode(" "))
        inicio = inicio - passos
      }
    }
  }

function limparResultado() {
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('inicio').value = ''
    document.getElementById('final').value = ''
    document.getElementById('passos').value = ''
  }
    




