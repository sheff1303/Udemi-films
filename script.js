const numberOfFilms = +prompt("Скольок фильмов вы уже посмотрели?", "");

const personalMoviDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов", "");
  const b = prompt("На сколько оцените его", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMoviDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMoviDB.count < 10) {
  console.log("Просмотренно довольно мало фильмов");
} else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
  console.log("Вы класcический зритель");
} else if (personalMoviDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Error");
}

console.log(personalMoviDB);
