fetch("https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf")
  .then((response) => response.json())
  .then((data) => console.log(data));
