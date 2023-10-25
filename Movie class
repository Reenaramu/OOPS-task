class Movie {
   constructor(title, studio, rating = "PG") {
     this.title = title;
     this.studio = studio;
     this.rating = rating;
   }
   static getPG(movieArray) {
      const pgMovies = [];
      for(let i = 0; i < movieArray.length; i++) {
         if(movieArray[i].rating === "PG") {
             pgMovies.push(movieArray[i]);
         }
      }
      return pgMovies;
   }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(casinoRoyale);
const movies = [
  casinoRoyale,
  new Movie("Lion King", "Studio A", "PG"),
  new Movie("Jungle Book", "Studio B", "R"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
