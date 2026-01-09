const year = document.querySelector("#currentyear");


const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()} 🌼 Martha Itohan Otasowie 🌼 Nigeria `;


document.getElementById("lastModified").innerHTML = ` Last Modification: ${ document.lastModified}`;