fetch('/api/conteudo')
  .then(r => r.text())
  .then(texto => {
    document.getElementById('app').innerHTML = texto;
  });
