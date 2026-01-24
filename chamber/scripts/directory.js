


// fetching data from json and using it to populate the html
const filePath = 'data/members.json';

async function getMembersData() {
  
    const response = await fetch(filePath);
    const data = await response.json();
    displayMembers(data.companies);
 
}

getMembersData();

function displayMembers(companies) {
  const container = document.getElementById('members-container');
  
  companies.forEach(company => {

    const card = document.createElement("section");
    card.className="directory-section"
    const h2=document.createElement('h2');
    const p1=document.createElement('p');
    const p2=document.createElement('p');
    const p3=document.createElement('p');
    const p4=document.createElement('p');
    const image=document.createElement('img');

    image.setAttribute('src', `images/${company.image}`);
    image.setAttribute('alt', `image of ${company.name}`);
    image.setAttribute('loading', 'lazy');
   
    h2.textContent=`${company.name}`;
    p1.textContent=`${company.address}`;
    p2.textContent=`${company.phone}`;
    p3.textContent=`${company.website}`;
    p4.textContent=`${company.membershipLevel}`;

    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
 

    container.appendChild(card)

  });
}