(function () {
  'use strict';

  var domains = ['gmail.com', 'aol.com', 'outlook.com'];
  var secondLevelDomains = ['hotmail']
  var topLevelDomains = ['com', 'net', 'org', 'br'];

  var campoEmail = document.querySelector('#email');
  var sugestaoEmail = document.querySelector("#sugestaoEmail");
  var valorSugerido = '';

  //Você quis dizer <a href="#">gmail.com?</a>

  campoEmail.addEventListener('blur', function () {
    removerClassesErro();
    Mailcheck.run({
      email: campoEmail.value,
      domains: domains,                       // optional
      topLevelDomains: topLevelDomains,       // optional
      secondLevelDomains: secondLevelDomains, // optional
      suggested: function (suggestion) {
        adicionarClassesErro();
        sugestaoEmail.textContent = 'Você quis dizer: ' + suggestion.full + '?';
        sugestaoEmail.setAttribute('tabindex', '0');
        sugestaoEmail.setAttribute('role', 'alert');
        valorSugerido = suggestion.full;
      }
    });
  });

  sugestaoEmail.addEventListener('click', function() {
    campoEmail.value =  valorSugerido;
    valorSugerido = '';
    removerClassesErro();
  });

  function removerClassesErro() {
    sugestaoEmail.style.display = 'none';
    sugestaoEmail.parentNode.classList.remove('contatoCampo--erro');
    sugestaoEmail.style.cursor = 'pointer';
    campoEmail.classList.remove('contatoCampo--validouErro');
  }

  function adicionarClassesErro() {
    sugestaoEmail.parentNode.classList.add('contatoCampo--erro');
    sugestaoEmail.style.display = 'inline-block';
    campoEmail.classList.add('contatoCampo--validouErro');
  }

})();