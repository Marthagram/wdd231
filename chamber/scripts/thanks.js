const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
// testing so see if it shows on console
console.log(myInfo);

const result = document.querySelector("#result");

result.innerHTML=`
<span>Thank You ${myInfo.get("first")} ${myInfo.get("last")} for Showing Interest to Join Us
<p>Your Application details includes:</p>
<p>Name: ${myInfo.get("first")} ${myInfo.get("last")} </p>
<p>Business Organization: ${myInfo.get("business")}</p>
<p>Position in Business: ${myInfo.get("title")}</p>
<p>Email: ${myInfo.get("email")}</p>
<p>Mobile Number: ${myInfo.get("telephone")}</p>
<p>Date of Application:${myInfo.get("timestamp")}</p>

`;
