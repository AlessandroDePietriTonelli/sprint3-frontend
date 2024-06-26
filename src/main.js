


const btnMovies = document.getElementById('btn-movies');
const btnDirectors = document.getElementById('btn-directors');
const btnSearchMovie = document.getElementById('btn-searchDirector');
const btnGenre = document.getElementById('btn-genre');
const btnAverageGenre = document.getElementById('btn-averageGenre');
const btnYear = document.getElementById('btn-year');

function showMovies() {
   
    let result = orderByYear(movies);
    let divMovies = document.getElementById('movies')
    result.forEach(film => {
        let titleYear = `${film.title} - ${film.year}  ---`
        divMovies.innerHTML += titleYear
    }) 
}

function showDirectors() {
    let directors = getAllDirectors(movies)
    document.getElementById('directors').innerHTML = directors
}

function showCategory() {
    let category = [...new Set(movies.flatMap(film => film.genre))];
    
    document.getElementById('genre').innerHTML = category
}

function searchMoviesfromDirector() {

    document.getElementById('showMoviesFromDirector').innerHTML = "";

    let director = document.getElementById('director').value;
    
    let result = getMoviesFromDirector(movies, director);
    
    let showResult = result.map(film => ({
        title: film.title,
        duration: film.duration,
        score: film.score
    }));
    
    
    let container = document.getElementById('showMoviesFromDirector');
   
    let ul = document.createElement('ul');

    
    showResult.forEach(film => {
    let li = document.createElement('li');
    li.textContent = `${film.title} - ${film.duration} - ${film.score}`;
    ul.appendChild(li);
    });

    
    container.appendChild(ul);
    
    let rating = moviesAverageOfDirector(movies, director);

    if(isNaN(rating)) {
        return
    }

    document.getElementById('rating').innerHTML = 
    `Average rating: ${rating}`;
   
    
   document.getElementById('director').value = "" 
}

function showAverageCategory() {
    const genre = document.getElementById('category').value;

    let result = moviesAverageByCategory(movies, genre);

    if (isNaN(result)) {
        return
    }

    document.getElementById('showAverageGenre').innerHTML = 
    `Average for ${genre}: ${result}`;

    document.getElementById('category').value = "";
}

function showBestForYear() {
    const year = parseInt(document.getElementById('year').value);
    const bestFilm = bestFilmOfYear(movies, year);
    const result = bestFilm.map(film => ({title: film.title, score: film.score}))
    
    if(result == "") {
        document.getElementById('showBestYear').innerHTML = 'fil not found';
        return;
    }
  
    document.getElementById('showBestYear').innerHTML = `${result[0].title}, ${result[0].score}`;

    document.getElementById('year').value = "";


}


btnMovies.addEventListener('click', showMovies);
btnDirectors.addEventListener('click', showDirectors);
btnSearchMovie.addEventListener('click', searchMoviesfromDirector);
btnGenre.addEventListener('click', showCategory);
btnAverageGenre.addEventListener('click', showAverageCategory);
btnYear.addEventListener('click', showBestForYear);

