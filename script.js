const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilm = prompt('Один из последних просмотренных фильмов?');
const gradeFilm = prompt('На сколько оцените его?');

const lastFilmOne = prompt('Один из последних просмотренных фильмов?');
const gradeFilmOne = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilm] = gradeFilm;
personalMovieDB.movies[lastFilmOne] = gradeFilmOne;

console.log(personalMovieDB);