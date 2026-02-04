import{places} from"../data/places.mjs";


function displayPlaces(places){
     const container = document.querySelector("#place-container");
    places.forEach(place => {
        container.innerHTML+=`
            
        <section>
            <h2>${place.name}</h2>
            <figure>
                <img src="images/${place.photoUrl}" alt="${place.description} loading="lazy">
            </figure>     
            <address>${place.address}</address>
            <p>${place.description} </p>
            <button>Learn More</button>

        </section>
        `
        
    });
}

displayPlaces(places);