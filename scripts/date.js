const year = document.querySelector("#currentyear");
const firstParagraph = document.querySelector("p")

const today = new Date();

year.innerHTML = ` ${today.getFullYear()}  `;
firstParagraph.innerHTML = `🌼 Martha Itohan Otasowie 🌼 Nigeria`

document.getElementById("lastModified").innerHTML = ` Last Modification: ${ document.lastModified}`;