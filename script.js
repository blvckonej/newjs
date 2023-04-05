const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <= 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?').trim();
            const gradeFilm = prompt('На сколько оцените его?');
        
            if (lastFilm != null && gradeFilm != null && lastFilm != '' && gradeFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = gradeFilm;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класичесский зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!')
        } else {
            console.log('errorFilm')
        }
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const generesQuestions = prompt(`Ваш любимый жанр под номером ${i}`);
            if (generesQuestions == null || generesQuestions === '') {
                i--
            } else if (generesQuestions != null && generesQuestions != '') {
                personalMovieDB.genres.push(generesQuestions);
            } else {
                console.log('error generes');
                i--
            }
        }
        personalMovieDB.genres.forEach(function(i, item) {
            let resultStr = `Любимый жанр #${item + 1} - это ${i}`
            return console.log(resultStr)
        }) 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
}

// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.start();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();