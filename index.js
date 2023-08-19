const columnOfShirts = document.querySelector("#shirts-display");

const createShirt = (shirt) => {
  const shirtDiv = document.createElement("div");
  shirtDiv.className = "shirt-info";
  columnOfShirts.appendChild(shirtDiv);
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
  });
