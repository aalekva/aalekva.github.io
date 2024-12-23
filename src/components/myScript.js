// Открывающиеся вопросы 
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.question');
    let activeAnswer = null;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const answerId = button.getAttribute('data-answer');
        const answer = document.getElementById(answerId);

        if (activeAnswer && activeAnswer !== answer) {
          activeAnswer.classList.remove('active');
        }

        if (answer.classList.contains('active')) {
          answer.classList.remove('active');
          activeAnswer = null;
        } else {
          answer.classList.add('active');
          activeAnswer = answer;
        }
      });
    });
  });
  
// Перелистываются картинки
  document.addEventListener('DOMContentLoaded', () => {
    const images = ["../images/bosch.png", "../images/bosch2.png", "../images/bosch3.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById('current-image');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const updateImage = () => {
      imageElement.style.opacity = '0';
      setTimeout(() => {
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = '1';
      }, 500);
    };

    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updateImage();
    });

    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateImage();
    });
  });


  const quotes = [
    "'Босх состоит из одних загадок.' <br/>— Федерико Дзери, итальянский искусствовед",
    "'Главное для зрителя — не поддаться искушению принять зло, которое здесь выглядит просто очаровательно!'<br/>— Федерико Дзери, итальянский искусствовед",
    "'Тот, кто знает, что он делает, и делает это хорошо, является истинным художником.' <br/>— Жозе Луи Порфирио, португальский музеевед и арт-критик"
];

let currentQuoteIndex = 0;

const quoteElement = document.getElementById("current-quote");

document.querySelector(".prev-quote").addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    quoteElement.innerHTML = quotes[currentQuoteIndex];
});

document.querySelector(".next-quote").addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.innerHTML = quotes[currentQuoteIndex];
});


 
const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});

