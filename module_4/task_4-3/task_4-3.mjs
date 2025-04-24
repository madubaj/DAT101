"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
 const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);

  const perimeter = (height + width + height + width);
  const area = (height * width);
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; Areal: " + area;
}; 


//--- Part 2 ----------------------------------------------------------------------------------------------
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  switch(key) {
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}


//--- Part 3 ----------------------------------------------------------------------------------------------
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = "";
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++) {
   const checkBox = chkTask3[i];
   if(checkBox.checked){
    const value = checkBox.value;
    if(value === "4"){
      text += "Du har valgt nummer " + value + ". Whaat.<br />"

    }else{
      text += "Du har valgt nummer " + value + ".<br />"
    }
   }

  }
  txtTask3Output.innerHTML = text;
  text = "";
}


//--- Part 4 ----------------------------------------------------------------------------------------------
const carDiv = document.getElementById("divTask4Cars");
const output = document.getElementById("txtTask4Output"); 

for (let i = 0; i < CarTypes.length; i++) {
  const car = CarTypes[i]; 

  const radio = document.createElement("input"); 
  radio.type = "radio"; 
  radio.name = "car";
  radio.value = car.caption; 
  radio.id = "car_" + car.value; 


  const label = document.createElement("label");
  label.htmlFor = radio.id; 
  label.textContent = car.caption; 
  
  radio.addEventListener("change", handleCarSelection); 

  carDiv.appendChild(radio);
  carDiv.appendChild(label); 
  carDiv.appendChild(document.createElement("br")); 
};

function handleCarSelection(event) {
    output.textContent = "Du har valgt: " + event.target.value; 
}; 

//--- Part 5 ----------------------------------------------------------------------------------------------
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", selectAnimals); 

function selectAnimals(e) {
  txtTask5Output.textContent = "Du har valgt " + ("(") + e.target.value + (") ") + e.target.options[e.target.selectedIndex].text; 
}; 


//--- Part 6 ----------------------------------------------------------------------------------------------
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.textContent = GirlsNames[i]; 
  selectTask6Girls.appendChild(option); 
}

selectTask6Girls.addEventListener("change", selectGirls); 

function selectGirls(event) {
  txtTask6Output.textContent = "Du valgte: " + event.target.value; 
};


//--- Part 7 ----------------------------------------------------------------------------------------------// 
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const tblMovies = document.getElementById("tblMovies");
const cmbAddMovie = document.getElementById("cmbAddMovie");


for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = MovieGenre[i];
  option.textContent = MovieGenre[i]; 
  selectMovieGenre.appendChild(option); 
}; 

let movieCount = 0; 

cmbAddMovie.addEventListener("click", function () {
  movieCount++ 

    const title = txtMovieTitle.value.trim() || "-";
    const genre = selectMovieGenre.value || "-";
    const director = txtMovieDirector.value.trim() || "-";
    const rate = txtMovieRate.value || "-";
  
    const movie = {
      nr: movieCount,
      title: title,
      genre: genre,
      director: director,
      rate: rate
    };
  
    addMovie(movie);

  });

function addMovie(movie) {
  const row = document.createElement("tr");

  let td = document.createElement("td");
  td.textContent = movie.nr;
  row.appendChild(td);

  td = document.createElement("td");
  td.textContent = movie.title;
  row.appendChild(td);

  td = document.createElement("td");
  td.textContent = movie.genre;
  row.appendChild(td);

  td = document.createElement("td");
  td.textContent = movie.director;
  row.appendChild(td);

  td = document.createElement("td");
  td.textContent = movie.rate;
  row.appendChild(td);

  tblMovies.appendChild(row);
};