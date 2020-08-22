import { QUOTES } from './quotes.js';

/////
// Display random quote from local quote selections
/////
var quotation = document.querySelector('blockquote.quotation');

const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

quotation.innerHTML = `"${randomQuote.quote}" <p>${randomQuote.author}, ${randomQuote.origin}</p>`;

// Fetch using NASA APOD (Astronomy Picture of the Day) API
var apodArticle = document.querySelector('#astronomyPictureOfTheDay');

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then((res) => res.json())
  .then((data) => {
    const APOD_MARKUP = `
      <h5>Astronomy Picture of the Day</h5>
      <img
        src=${data.url}
        srcset="${data.url},
                ${data.hdurl}"
        alt=${data.title}
      />
      <h3>${data.title}</h3>
      <p>${data.explanation}</p>
      `;

    document.querySelector('.firstArticle').classList.toggle('firstArticle');
    apodArticle.classList.add('firstArticle', 'article-container');

    apodArticle.innerHTML = APOD_MARKUP;

    return;
  });
