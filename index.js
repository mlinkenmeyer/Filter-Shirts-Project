const shirtsAlongSide = document.querySelector("#shirts-display");
const formContainer = document.querySelector("#filter-shirts");

const createShirt = (shirt) => {
  const shirtDiv = document.createElement("div");
  shirtDiv.className = "shirt-info";
  shirtsAlongSide.appendChild(shirtDiv);
  const shirtImage = document.createElement("img");
  shirtImage.src = shirt.image_url;
  shirtImage.className = "shirt-image";
  shirtDiv.appendChild(shirtImage);
  const shirtName = document.createElement("h3");
  shirtName.textContent = shirt.name;
  shirtName.className = "shirt-name";
  shirtDiv.appendChild(shirtName);
  const shirtPrice = document.createElement("p");
  shirtPrice.textContent = shirt.price;
  shirtPrice.className = "shirt-price";
  shirtDiv.appendChild(shirtPrice);
};

const makeShirtList = (shirts) => {
  shirts.forEach((shirt) => {
    createShirt(shirt);
  });
};

fetch("http://localhost:3000/shirts")
  .then((r) => r.json())
  .then((shirts) => {
    makeShirtList(shirts);
    globalAllShirts = shirts;
  });

// code from blog
function createDropdown(id, label, options) {
  const select = document.createElement("select");
  select.id = id;

  const labelElem = document.createElement("label");
  labelElem.textContent = label;

  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText.toLowerCase().replace(" ", "-");
    option.textContent = optionText;
    select.appendChild(option);
  });

  formContainer.appendChild(select);
  formContainer.appendChild(labelElem);
}

createDropdown("color", "Color:", [
  "All",
  "Blue",
  "Pink",
  "Black",
  "White",
  "Striped",
]);

let globalAllShirts = [];
console.log(globalAllShirts); //at this point, your console will show an empty array

const selectedColorDropdown = document.querySelector("#color");
console.log(selectedColorDropdown);
/*at this point, your console will also show the elements of the drop-down
form with the id of "color". That will have 6 option elements within
it containing the options from the createDropdown function.
*/

selectedColorDropdown.addEventListener("change", (e) => {
  console.log(e);
  console.log("selected value : " + selectedColorDropdown.value);
  filterShirts();
  if (selectedColorDropdown.value === "all") {
    makeShirtList(globalAllShirts); // Show all shirts again
  }
});

function filterShirts() {
  removeNotSelectedShirts(shirtsAlongSide);

  const selectedShirtColor = document.querySelector("#color").value;
  const listOfSelectedShirts = globalAllShirts.filter(
    (shirt) => shirt.color === selectedShirtColor
  );
  console.log("selectedshirt : ", listOfSelectedShirts);
  makeShirtList(listOfSelectedShirts);
}

function removeNotSelectedShirts(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//working code

// // Function to create a dropdown select element with options
// function createDropdown(id, label, options) {
//   const select = document.createElement("select");
//   select.id = id;

//   const labelElem = document.createElement("label");
//   // labelElem.for = id;
//   labelElem.textContent = label;

//   options.forEach((optionText) => {
//     const option = document.createElement("option");
//     option.value = optionText.toLowerCase().replace(" ", "-");
//     option.textContent = optionText;
//     select.appendChild(option);
//   });

//   formContainer.appendChild(labelElem);
//   formContainer.appendChild(select);
// }

// // "color" is the "id" attribute for the dropdown select element
// //"Color" is the label displayed in the dropdown
// createDropdown("color", "Color:", [
//   "All",
//   "Blue",
//   "Pink",
//   "Black",
//   "White",
//   "Striped",
// ]);

// let globalAllShirts = [];
// console.log(globalAllShirts);

// const selectedColorDropdown = document.querySelector("#color");
// console.log(selectedColorDropdown);
// // console.log("initial value : " + selectedColorDropdown.value);

// selectedColorDropdown.addEventListener("change", (e) => {
//   console.log(e);
//   console.log("selected value : " + selectedColorDropdown.value);
//   filterShirts();
//   if (selectedColorDropdown.value === "all") {
//     makeShirtList(globalAllShirts); // Show all shirts again
//   }
// });

// function filterShirts() {
//   removeNotSelectedShirts(shirtsAlongSide);

//   console.log("How many shirts at start", globalAllShirts.length);
//   const selectedShirtColor = document.querySelector("#color").value;
//   console.log("selected color : " + selectedShirtColor);

//   const listOfSelectedShirts = globalAllShirts.filter(
//     (shirt) => shirt.color === selectedShirtColor
//   );
//   console.log("selectedshirt : ", listOfSelectedShirts);

//   makeShirtList(listOfSelectedShirts);
// }

// function removeNotSelectedShirts(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }
