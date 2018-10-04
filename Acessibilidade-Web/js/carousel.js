var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');

// criando marcador de noticia selecionada
var indicadorDeNoticiaSelecionada = document.createElement('span');
indicadorDeNoticiaSelecionada.classList.add('escondeVisualmente');
indicadorDeNoticiaSelecionada.textContent = 'Slide Atual';
indicadorDeNoticiaSelecionada.id = 'indicadorDeNoticiaSelecionada';

// exibir primeira notícia
noticias[0].style.display= 'block';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();

    // esconde todas as notícias
    noticias.forEach(function(noticia){
      noticia.style.display = 'none';
    });

    var index = btn.getAttribute('data-sliderItem');
    noticias[index].style.display = 'block';

    btn.appendChild(indicadorDeNoticiaSelecionada);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})