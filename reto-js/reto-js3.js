// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // extraemos todos los directores en un array
  const directors = moviesArray.map((movie) => movie.director);

  //creamos un Set a partir del array de directores para eliminar duplicados
  const uniqueDirectorsSet = new Set(directors);

  //convertimos el Set de vuelta a un array para devolverlo
  const uniqueDirectorsArray = Array.from(uniqueDirectorsSet);

  return uniqueDirectorsArray;
}