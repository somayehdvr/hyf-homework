//Create an array of movies containing the movies with a short title
const shortTitleMovies = movies.filter (movie => movie.title.length < 3)

//Create an array of movie titles with long movie titles
const longTitles = movies.filter (movie => movie.title.length > 50).map (title => title.title)

//Count the number of movies made between 1980-1989 (including both the years)
const moviesCount = movies.filter (movie => (movie.year >= 1980 && movie.year <= 1989)).length

//Create a new array that has an extra key called tag.
const moviesWithTag = movies
moviesWithTag.forEach (movie => (movie.tag = movie.rating >= 7 ? "Good" : (movie.rating >= 4 ? "Average" : "Bad")))

//Using chaining, 
//first filter the movies array to only contain the movies rated higher than 6. 
//Now map the movies array to only the rating of the movies.
const highRatings = movies.filter (movie => movie.rating > 6).map(movie => movie.rating)

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
//So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
//Can you make sure the search is case insensitive?
const keywordsCount = movies.filter (movie => (movie.title.includes("Surfer") || movie.title.includes("Alien") || movie.title.includes("Benjamin"))).length

//Create an array of movies where a word in the title is duplicated. 
//Fx "Star Wars: The Clone Wars" the word Wars is duplicated. 
//Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const moviesWithDuplicatedWord = movies.filter(movie => movie.title.toLowerCase().split(' ').filter((item,i,allItems) => i!==allItems.indexOf(item)).join(' '))