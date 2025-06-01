const quotes = [
  {
    quote: "I want to get good scores on Toefl",
    author: "Juyoung Choi",
  },
  {
    quote: "Imagine their stupid faces when we succeed",
    author: "Yoon Sang Keub",
  },
  {
    quote:
      "The reason why the pictures are taken well is thanks to the models'roles.",
    author: "Go Sebin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
