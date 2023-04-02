let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?');
        const gradeFilm = prompt('На сколько оцените его?');
    
        if (lastFilm != null && gradeFilm != null && lastFilm != '' && gradeFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = gradeFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }    
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класичесский зритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!')
    } else {
        console.log('errorFilm')
    }
}

detectPersonalLevel();

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const generesQuestions = prompt(`Ваш любимый жанр под номером ${i}`);
        if (generesQuestions != null && generesQuestions != '') {
            personalMovieDB.genres.push(generesQuestions);
        } else {
            console.log('error generes');
            i--
        }
    }
}

writeYourGenres();

console.log(personalMovieDB);
