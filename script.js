const numberOfFilms = +prompt("Скольок фильмов вы уже посмотрели?", "");

const personalMoviDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов", "");
const b = prompt("На сколько оцените его");
const c = prompt("Один из последних просмотренных фильмов", "");
const d = prompt("На сколько оцените его", "");

personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;

console.log(personalMoviDB);
