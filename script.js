const addMoviesToDom = (movieArray) => {

    movieArray.forEach(movie => {

        const getUl = document.getElementById("ul-movies");

        // console.log(getUl);

        const newLi = document.createElement("li");

        // console.log(newLi);

        const newImg = document.createElement("img");
        newImg.src = movie.Poster;

        const newA = document.createElement("a");
        newA.href = `https://www.imdb.com/title/${movie.imdbID}`;
        newA.setAttribute("target", "_blank");

        getUl.appendChild(newLi)
        newLi.appendChild(newA)
        newA.appendChild(newImg);
    });
};

addMoviesToDom(movies);

function addEventListners() {
    const getRadioButtons = document.getElementsByName("radio-buttons")
    // console.log(getRadioButtons)

    getRadioButtons.forEach((getRadioButton) => {
        getRadioButton.addEventListener("change", handleOnChangeEvent)
    });
};

addEventListners();

function handleOnChangeEvent(event) {

    switch (event.target.value) {

        case "new-movie":
            filterLatest();
            break;

        case "avenger-movies":
            filterMovies("Avenger");
            break;

        case "xmen-movies":
            filterMovies("X-Men");
            break;

        case "batman-movies":
            filterMovies("Batman");
            break;

        case "princess-movies":
            filterMovies("Princes");
            break;

        default:
            filterMovies("default movies");
            break;
    };
};

addEventListners();

function filterMovies(wordInMovieTitle) {

    removeMoviesFromDOM();

    const filteredMovies = movies.filter((movie) => {
        return movie.Title.includes(wordInMovieTitle)
    })
    addMoviesToDom(filteredMovies);
    // console.log(filteredMovies)
};


function filterLatest() {

    removeMoviesFromDOM();

    const filterMoviesYear = movies.filter((movie) => {
            return movie.Year >= 2014;
        });

    addMoviesToDom(filterMoviesYear);

    // console.log("Movies 2014 and up:", filterMoviesYear);
};

function removeMoviesFromDOM() {
    const currentListedMovies = document.getElementById("ul-movies");

    while (currentListedMovies.hasChildNodes()) {
        currentListedMovies.removeChild(currentListedMovies.firstChild);
        // console.log("All movies are removed");
    };
};

