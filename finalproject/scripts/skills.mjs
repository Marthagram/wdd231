import{displayCards} from"./index.js";
// fetching data from json and using it to populate the html
const filePath = 'data/skills.json';

async function getMembersData() {
    try {
      const response = await fetch(filePath);
      if (response.ok) {
        const data = await response.json();
        displayCards(data.skills);
        // If JSON has wrapper object:
        // displayCards(data.skills);

        // If JSON is direct array:
        // displayCards(data);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  


getMembersData();
