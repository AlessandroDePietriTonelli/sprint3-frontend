// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(film => film.director === director)
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorArray = array.filter(film => film.director === director);
  let result = directorArray.reduce((total, film) => total + film.score, 0);
  return result / directorArray.length
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(film => film.title).sort()
  if(result.length > 20){
    result.length = 20
  }
  
  return result
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
 let result = array.map(film => ({title: film.title, year: film.year}))
                   .sort((a,b) => a.year - b.year || a.title.localeCompare(b.title))
 
 return result 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let genreArray = array.filter(film => film.genre.includes(genre));
  let result = genreArray.reduce((total, film) => total + film.score, 0);
  return result / genreArray.length
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  function convert(string){
    let arr = string.split(' ');
    let hours = 0;
    let minutes = 0;
    if (arr.length == 1) {
      hours = parseInt(arr[0])
    } else {
      hours = parseInt(arr[0]);
      minutes = parseInt(arr[1])
    }
    let time = (hours * 60) + minutes
    return time
  }
  let result = array.map(film => ({...film, duration: convert(film.duration)}))
  return result
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filterByYear = array.filter(film => film.year === year);
  let result = filterByYear.sort((a,b) => b.score - a.score);
  result.length = 1;
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
