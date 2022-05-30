// -------------------------Slide show-----------------------


var imageArray = ["https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR1,0,140,209_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX140_CR0,0,140,209_AL_.jpg"
]


var index = 0;
var sliderImage = document.getElementById("sliderImage");
var slideshow = document.getElementById("slideshow");

function slide() {


    sliderImage.setAttribute("src", imageArray[index]);

    index++;
    if (index >= imageArray.length) {
        index = 0;
    }

}

setInterval("slide()", 3000);

//-----------------------------------Slide Show End-------------------------------

// ----------------------------------Movie List-------------------------------------



let url = `http://www.omdbapi.com/?i=tt3896198&apikey=14b6bae0`

async function searchForMovie() {

    try {

        let searchName = document.getElementById('searchBar').value;

        let res = await fetch(`http://www.omdbapi.com/?s=${searchName}&apikey=14b6bae0`);
        var movieList = await res.json();

        console.log(movieList)

        displayMovies(movieList);
    } catch (err) {
        console.log(err);

        let errorImg = document.createElement('img');
        errorImg.src = "https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"

        document.getElementById("moviesContainer").append(errorImg)

    }
}

// Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Title: "Batman v Superman: Dawn of Justice"
// Type: "movie"
// Year: "2016"
// imdbID: "tt2975590"

// {"Title":"Batman",
// "Year":"1989",
// "Rated":"PG-13",
// "Released":"23 Jun 1989",
// "Runtime":"126 min",
// "Genre":"Action, Adventure",
// "Director":"Tim Burton",
// "Writer":"Bob Kane, Sam Hamm, Warren Skaaren","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger",
// "Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
// "Language":"English, French, Spanish",
// "Country":"United States, United Kingdom",
// "Awards":"Won 1 Oscar. 9 wins & 26 nominations total",
// "Poster":"https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg",
// "Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"72%"},{"Source":"Metacritic",
// "Value":"69/100"}],
// "Metascore":"69",
// "imdbRating":"7.5",
// "imdbVotes":"371,227",
// "imdbID":"tt0096895",
// "Type":"movie",
// "DVD":"22 Aug 1997",
// "BoxOffice":"$251,409,241",
// "Production":"N/A",
// "Website":"N/A",
// "Response":"True"}

var movieListCopy = JSON.parse(JSON.stringify(movieList));

function displayMovies(movieList) {

    moviesContainer.innerHTML = "";
    document.getElementById("movies").innerHTML = "";

    movieList.Search.forEach(function(element) {

        let id = element.imdbID

        fetch((`https://www.omdbapi.com/?i=${id}&apikey=14b6bae0`)).then(response => {
            response.json().then(e => {


                var movieCard = document.createElement("div");
                movieCard.setAttribute("class", "movieCard")


                var movieTitle = document.createElement("h4");
                movieTitle.innerText = e.Title;

                var movieRecommendation = document.createElement("h4");
                movieRecommendation.innerText = "***RECOMMENDED***";
                movieRecommendation.style.backgroundColor = "black";
                movieRecommendation.style.color = "white";


                var moviePoster = document.createElement("img");
                moviePoster.src = e.Poster;

                var releaseDate = document.createElement("p");
                releaseDate.innerText = "Release Date: " + e.Released;

                var imbdRatings = document.createElement("p");
                imbdRatings.innerText = "IMBD Ratings: " + e.imdbRating;

                if (e.imdbRating < 8.5) {
                    movieRecommendation.style.visibility = "hidden";
                }


                movieCard.append(movieTitle, movieRecommendation, moviePoster, releaseDate, imbdRatings);
                document.getElementById("movies").append(movieCard)
            })

        })

    })

}