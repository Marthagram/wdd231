const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `&copy; ${today.getFullYear()} 🌼 Martha Itohan Otasowie 🌼 Nigeria `;
document.getElementById("lastModified").innerHTML = ` Last Modified: ${ document.lastModified}`;

document.getElementById('timestamp').value = today.toLocaleString('en-NG', { timeZone: 'Africa/Lagos' });