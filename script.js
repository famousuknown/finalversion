document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.button');
  var description = document.getElementById('description');
  var adjectivesContainer = document.getElementById('adjectives');
  var pianoSound = document.getElementById('pianoSound');
  var container = document.getElementById('container');
  var timeoutId;

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
       clearTimeout(timeoutId);
      var letter = button.textContent;
      var adjectives = getAdjectives(letter);
      
      // Очищаем содержимое контейнера description
      description.textContent = '';

      // Добавляем прилагательные в бегущую строку
      adjectivesContainer.innerHTML = '';
      adjectives.forEach(function(adjective) {
        var span = document.createElement('span');
        span.textContent = adjective;
        adjectivesContainer.appendChild(span);
      });

      // Запускаем анимацию бегущей строки
      adjectivesContainer.style.animation = 'marquee 5s linear infinite';

      // Воспроизводим звук пианино
      pianoSound.play();

      // Изменяем фон экрана в зависимости от нажатой кнопки
      switch (letter) {
        case 'L':
          document.body.style.backgroundImage = "url('flag_russia.jpg')";
    break;
  case 'U':
    document.body.style.backgroundImage = "url('flag_singapore.jpg')";
    break;
  case 'C':
    document.body.style.backgroundImage = "url('flag_uk.jpg')";
    break;
  case 'I':
    document.body.style.backgroundImage = "url('flag_france.jpg')";
    break;
  case 'N':
    document.body.style.backgroundImage = "url('flag_japan.jpg')";
    break;
  case 'D':
    document.body.style.backgroundImage = "url('flag_italy.jpg')";
    break;
  case 'E':
    document.body.style.backgroundImage = "url('flag_ballet.jpg')";
    break;
  default:
    document.body.style.backgroundImage = 'none';
      }

      // Устанавливаем таймер для возвращения исходного фона через 1 секунду
      timeoutId = setTimeout(function() {
        document.body.style.backgroundImage = 'none';
      }, 1100);
    });
  });

  function getAdjectives(letter) {
    var adjectives = {
      'L': ['lovely', 'Leading', 'luminous'],
      'U': ['unique', 'unstoppable', 'uplifting'],
      'C': ['charming', 'caring', 'creative'],
      'I': ['intelligent', 'inspiring', 'irresistible'],
      'N': ['noble', 'natural', 'nurturing'],
      'D': ['dazzling', 'delightful', 'dynamic'],
      'E': ['elegant', 'enchanting', 'empowering']
    };
    return adjectives[letter] || [];
  }
});
