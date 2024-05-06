// Exemplo de código JavaScript para adicionar interatividade ao site
// Por exemplo, um código para destacar o link ativo na navegação

const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

