const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data into object
  //console.table(data.prophets);
  displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets)=>{
  prophets.forEach((prophet) => {
    // card build code goes here
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const paragraph1 = document.createElement("p")
    const paragraph2 = document.createElement("p")

    fullName.textContent=`${prophet.name} ${prophet.lastname} `;

    paragraph1.textContent =`Date of Birth ${prophet.birthdate}`;
    paragraph2.textContent =`Place of Birth ${prophet.birthplace}`;



    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');


    // Append the section(card) with the created elements

    card.appendChild(fullName); //fill in the blank
    card.appendChild(paragraph1);
    card.appendChild(paragraph2);
    card.appendChild(portrait);

    // Append the div(cards) with the section(card)

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
    
}