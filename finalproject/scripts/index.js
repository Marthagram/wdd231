
const skillContainer=document.querySelector("#skills-container");
const applyButton=document.querySelector("#apply-button");
const aboutUsButton=document.querySelector("#about-us-button");
const myTitle=document.querySelector("h4");
const myInfo=document.querySelector("#mydialog p");
const myDialog=document.querySelector("#mydialog");
const myClose= document.querySelector("#mydialog button")

myClose.addEventListener("click", () => myDialog.close())


// listen to click action on two buttons leading to another webpage
applyButton.addEventListener("click", () => {
    window.location.href='apply.html';
})


aboutUsButton.addEventListener("click", () => {
    window.location.href='about-us.html';
})


// populate the #skill-container

export function displayCards(skills){
    // populate the section cards in html
    skills.forEach(skill => {
        const section = document.createElement('section')
        section.className=("section-cards")
        section.innerHTML=`<h3>${skill.name}</h3>
           <p class=p1>${skill.category}</p>
           <p class=p2>${skill.estimated_duration} intensive training</p>
           <p class=p3>${skill.difficulty_level}</p>
           <img src="${skill.image_url}" alt="${skill.description}" loading=lazy width="300" height="200">
           
        <button class="learn-button">Learn More</button>`
        
        const button = section.querySelector("button");
        button.addEventListener("click", () => showStuff(skill));

        skillContainer.appendChild(section)
        
    });
    
}

function showStuff(skill){
    myTitle.innerHTML= `${skill.name}`;
    myInfo.innerHTML=`${skill.description}`;

    myDialog.showModal()
}