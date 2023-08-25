// Task 0
// Sign up for a Mapbox account and add your access token below. Remove YOUR-ACCESS-TOKEN-HERE, and put your token between the quotes
mapboxgl.accessToken = "pk.eyJ1IjoicGF0aG8iLCJhIjoiY2xrc2N6NmVsMDI0MzNlbmRxcHZhcDBhbiJ9.J4Vm4P0FQ6XPaON-fTvYeg";

// Task 1 - DONE
function filterPlacesByType(typePreference) {
  filteredPlaces = []; // Creates a new array called filteredPlaces
  for(let i = 0; i < PLACES.length; i++){ // Loops through PLACES
    if((PLACES[i].type) == typePreference){ // If a places type matches the typePreference, adds it to filteredPlaces
      filteredPlaces.push(PLACES[i]); // Adds place to filteredPlaces array if condition met
    }
  }
  return filteredPlaces; // Returns type matched places
}

// Task 2 - DONE
function createCard(place) {
  let card = document.createElement("div"); // Creates a new div element and store it in card
  card.classList.add("col"); // Adds the col class to the card element
  card.innerHTML = `<div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
      <img src="${place.img}" class="card-img-top h-100" alt="Picture of Location">
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
        </div>
      </div>
    </div>`;
  return card; // Returns the card
}


// Task 3 - DONE
function populateRecommendationCards(filteredPlaces) {
  let element = document.getElementById("recommendations"); // Stores the DOM element with id "recommendations" in the element variable
  element.innerHTML = ""; // Clears the recommendations innerHTML
  for(let i = 0; i < filteredPlaces.length; i++){ // Loops through filteredPlaces array
    element.append(createCard(filteredPlaces[i])); // Creates and appends each new card from the filtered places array to element using the createCard function
  }
}

// Task 4 - DONE
function findPlaceByName(placeName) {
  for(let i = 0; i < PLACES.length; i++){ // Loops through PLACES
    if((PLACES[i].name) == placeName){ // If a places name matches placeName, return it
      return PLACES[i]; // Returns place with name that matches placeName
    }
  }
}

