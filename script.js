// 1. Seleciona o botão de entrar e o popup
const botaoEntrar = document.getElementById('link-entrar');
const popup = document.getElementById('popup-entrar');
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