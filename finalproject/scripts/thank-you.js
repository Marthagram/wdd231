const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
// testing so see if it shows on console
console.log(myInfo);

const result = document.querySelector("#result");


function displayResult(){
result.innerHTML=`
    <span class="thanks">Thank You ${myInfo.get("first")} ${myInfo.get("last")} for Showing Interest to be Our Student. 
    You will be contacted through your email soon</span>
    <p>Your Application details includes:</p>
    <p><span class="details">Name:</span> ${myInfo.get("first")} ${myInfo.get("last")} </p>
    <p><span class="details">Skill of Choice:</span> ${myInfo.get("skills-select")}</p>
    <p><span class="details">Email:</span> ${myInfo.get("email")}</p>
    <p><span class="details">Mobile Number:</span> ${myInfo.get("telephone")}</p>
    `;
}


displayResult();