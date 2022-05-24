const verMaisButton = document.querySelector('#more');
const post = document.querySelector('.card');
const gosteiButton = document.querySelector('.likes');
const pesquisaInput = document.querySelector('.busca');

verMaisButton.addEventListener('click', function () {
  const cardsSection = document.querySelector('.cards');
  cardsSection.innerHTML += `${post.outerHTML}`;
});

gosteiButton.addEventListener('click', function () {
  const coracaoImg = document.querySelector('.likes > img');
  const likesText = document.querySelector('.likes > b');

  if (!coracaoImg.classList.contains('liked')) {
    coracaoImg.src = 'img/red-heart.png';
    likesText.innerHTML = '2 Likes';
    coracaoImg.classList.add('liked');
  } else {
    coracaoImg.src = 'img/icons/heart.svg';
    likesText.innerHTML = '1 likes';
    coracaoImg.classList.remove('liked');
  }
});

pesquisaInput.onmouseover = function() {
  this.style.boxShadow = '0px 1px 3px black';
};

pesquisaInput.onmouseout = function() {
  this.style.boxShadow = '';
};

function redirecionar () {
  const caminhoSeparado = location.href.split('/');
  caminhoSeparado.pop();
  caminhoSeparado.push('register.html');
  location.href = caminhoSeparado.join('/');
}

window.onload = function () {
  const username = sessionStorage.getItem('username');

  if (username) {
    // buscando elementos
    const usernameElement = document.getElementById('avatar-username');
    const navBar = document.querySelector('header nav');
    const botaoSair = document.createElement('a');
    const avatarContent = document.createElement('div');
    
    // Alterando elementos
    usernameElement.innerText = username;
    avatarContent.classList.add('avatar-content');
    botaoSair.innerText = 'Sair';

    // Injetando elementos no dom
    navBar.appendChild(avatarContent);
    avatarContent.appendChild(botaoSair);

    // Adicionando evento no botão
    botaoSair.onclick = function () {
      sessionStorage.removeItem('username');
      redirecionar();
    }
  }
}