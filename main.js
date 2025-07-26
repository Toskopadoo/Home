fetch('/api/conteudo')
  .then(res => res.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch(err => {
    document.getElementById('app').innerHTML = 'Erro ao carregar o site.';
    console.error(err);
  });
