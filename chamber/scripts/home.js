




export function displayMembers(companies) {
  const container = document.getElementById('member-container');
  const filteredCompanies = companies.filter(company => 
    company.membershipLevel === "3 (Gold)" || company.membershipLevel === "2 (Silver)"
  );

  // Shuffle and select 3 random companies
  const randomCompanies = filteredCompanies.sort(() => Math.random() - 0.5).slice(0, 3);

  randomCompanies.forEach(company => {
   
    const card = document.createElement("section");
    card.className="index-section"
    const h3=document.createElement('h3');     
    const p1=document.createElement('p');
    const p2=document.createElement('p');
    const p3=document.createElement('p');
    const p4=document.createElement('p');
    const image=document.createElement('img');

    image.setAttribute('src', `images/${company.image}`);
    image.setAttribute('alt', `images/${company.name}`);
    image.setAttribute('loading', 'lazy');
    h3.textContent=`${company.name}`;
    p1.innerHTML=`<i>${company.tagLine}</i>`;
    p2.innerHTML=`<strong>PHONE:</strong> ${company.phone}`;
    p3.innerHTML=`<strong>EMAIL:</strong> ${company.website}`;
    p4.innerHTML=`<strong>Level:</strong> ${company.membershipLevel}`;

    const head=document.createElement('div');
    head.className="head";
    const photo=document.createElement('div');
    photo.className="photo";
    const detail=document.createElement('div');
    detail.className="detail";

    photo.appendChild(image);
    head.appendChild(h3);
    head.appendChild(p1);
    detail.appendChild(p2);
    detail.appendChild(p3);
    detail.appendChild(p4);
    card.appendChild(photo)
    card.appendChild(head)
    card.appendChild(detail)
    container.appendChild(card)
  });
}