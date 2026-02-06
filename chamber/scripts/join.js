const membership=[
    {
        heading: "Non-Profit Membership Level",
        id:"npmodal",
        listOne:"Exclusive non-profit benefits",
        listTwo:"Access to community event",
        listThree:"Networking opportunities"
    },

    {
        heading: "Bronze Membership Level(₦5000)",
        id:"bronze",
        listOne:"Event discounts (10%)",
        listTwo:"Basic training sessions",
        listThree:"Access to members-only resources"
    },
                            
    {
        heading: "Silver Membership Level(₦10000)",
        id:"silver",
        listOne:"Bronze benefits +",
        listTwo:"Training workshops",
        listThree:"Priority event registration"
    },

    {
        heading: "Gold Membership Level(₦20000)",
        id:"gold",
        listOne:"Silver benefits +",
        listTwo:"Special events access",
        listThree:"VIP event invitations"
    }

]




function displayMembership(membership){
  const container = document.querySelector("#membership-container");
  membership.forEach(member => {
    container.innerHTML += `
      <section>
        <h3>${member.heading}</h3>
        <a href="#" data-target="#${member.id}">Learn More</a>
        <dialog id="${member.id}">
          <h4> Benefits</h4>
          <ul>
            <li>${member.listOne}</li>
            <li>${member.listTwo}</li>
            <li>${member.listThree}</li>
          </ul>
          <button class="btn-primary">Close</button>
        </dialog>
      </section>
    `;
  });
}
displayMembership(membership);

// data-target attribute act on each specific a link one after the other 
//  e.preventDefault(); prevents the default loading of a form page

const links = document.querySelectorAll("a[data-target]");
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    const modal = document.querySelector(target);
    modal.showModal();
  });
});

const closeButtons = document.querySelectorAll(".closeButton");
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    modal.close();
  });
});     