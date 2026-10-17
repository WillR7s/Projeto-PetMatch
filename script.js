// 1. Seleciona o botão de entrar e o popup
const botaoEntrar = document.getElementById('link-entrar');
const popup = document.getElementById('popup-entrar');
const botaoCadastrar = document.getElementById('link-cadastrar');
const popup2 = document.getElementById('popup-Cadastrar');


botaoEntrar.addEventListener('click', (event) => {
  event.preventDefault();

  // Se tem a classe 'ativo', remove. Se não tem, adiciona.
  popup.classList.toggle('ativo');

  // Faz a mesma coisa com a trava do fundo
  document.body.classList.toggle('travar-scroll');
});

// Fecha se clicar no fundo escuro fora da caixa do popup
popup.addEventListener('click', (event) => {
  // Se o clique foi diretamente no fundo escuro (e não dentro do popup1)
  if (event.target === popup) {
    popup.classList.remove('ativo');
    document.body.classList.remove('travar-scroll');
  }
});

botaoCadastrar.addEventListener('click', (event) => {
  event.preventDefault();

  // Se tem a classe 'ativo', remove. Se não tem, adiciona.
  popup2.classList.toggle('ativo');

  // Faz a mesma coisa com a trava do fundo
  document.body.classList.toggle('travar-scroll');
});

// Fecha se clicar no fundo escuro fora da caixa do popup
popup2.addEventListener('click', (event) => {
  // Se o clique foi diretamente no fundo escuro (e não dentro do popup1)
  if (event.target === popup2) {
    popup2.classList.remove('ativo');
    document.body.classList.remove('travar-scroll');
  }
});