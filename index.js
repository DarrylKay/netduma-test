const firstName = document.getElementById("firstName").value;
const otherName = document.getElementById("otherName").value;
const email = document.getElementById("email").value;
const telNumber = document.getElementById("telNumber").value;
const street = document.getElementById("street").value;
const town = document.getElementById("town").value;
const country = document.getElementById("country").value;
const submitBtn = document.getElementsByClassName("submit");
const content = document.getElementById("content");

const addressBook = [];
const address = {};

handleInput = e => {
  address[e.id] = e.value;
};

submitForm = () => {
  addressBook.push(address);
  console.log(addressBook);
  document.getElementById("Form").reset();
};

