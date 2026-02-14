import{temples} from'../data/temples.js'
import{url} from'../data/temples.js'

const showHere = document.querySelector("#showHere")

const myDialog= document.querySelector("#mydialog")
const myTitle = document.querySelector("#mydialog h2")
const myInfo = document.querySelector("#mydialog p")
const myClose= document.querySelector("#mydialog button")

myClose.addEventListener("click", () => myDialog.close())

// -------Loop through the array of json items
function displayItems(data){
    console.log(data)
    data.forEach(x=>{
        console.log(x)
        const photo = document.createElement('img')
        photo.src=`${url}${x.path}`
        photo.alt=x.name
        // ADD EVENT LISTENER TO EACH DIVISION ON THE PAGE
        photo.addEventListener("click",()=> showStuff(x));

        showHere.appendChild(photo)
})
};

displayItems(temples)

function showStuff(x){
    myTitle.innerHTML= x.name;
    myInfo.innerHTML=`Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;

    myDialog.showModal()
}
// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED

