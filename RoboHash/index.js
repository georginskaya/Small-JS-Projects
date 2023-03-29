// select all element that you need
// pay attention to the format
// creat an img element and put the generated img source into it
// fetch date and use async

const textInput = document.getElementById("text-input");
const generateBtn = document.getElementById("generate-btn");
const selectDropdown = document.getElementById("select-set");
const container = document.getElementById("robohash-container");

generateBtn.addEventListener("click", getImage);

function randomSize() {
  let sizes = ["50", "100px", "150px", "200px", "250px", "350px"];
  let index = Math.floor(Math.random() * sizes.length);
  return sizes[index];
}

// await - operator is used to wait for a Promise
//to complete before executing the rest of the code
// only works with async functions

async function getImage(event) {
  event.preventDefault();
  let text = textInput.value;
  let selected = selectDropdown.value;
  let encodedText = encodeURIComponent(text);
  try {
    let response = await axios.get(
      `https://robohash.org/${encodedText}?set=${selected}`
    );

    console.log(response);
    // this  code  line will not run until the promise (await response) returns
    // appending text
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let fing = document.createElement("span");
    fing.innerHTML = `${text}`;
    fing.classList.add("findcaption");
    imgContainer.appendChild(fing);

    // appending img
    let img = document.createElement("img");
    img.src = response.request.responseURL;
    imgContainer.appendChild(img);
    let randomWidth = randomSize();
    img.style.width = randomWidth;
    img.style.height = randomWidth;

    container.appendChild(imgContainer);
  } catch (error) {
    console.log(`something went wrong: ${error}`);
  }
}
