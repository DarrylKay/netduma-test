window.onload = () => {
  const content = document.getElementsByClassName("content")[0];

  let addressBook = [];
  let address = {};

  handleInput = e => {
    address[e.id] = e.value;
  };

  submitForm = () => {
    if (Object.keys(address).length > 6) {
      addressBook.push(address);
      document.getElementById("Form").reset();
      address = {};
    } else {
      alert("please fill in all input fields before proceeding");
    }
    console.log(address);
    localStorage["addressbook"] = JSON.stringify(addressBook);
    document.getElementById("Form").reset();
    displayAddress();
  };

  deleteEntry = e => {
    addressBook.splice(e.id, 1);
    localStorage["addressbook"] = JSON.stringify(addressBook);
    displayAddress();
  };

  displayAddress = () => {
    addressBook = JSON.parse(localStorage["addressbook"]);
    content.innerHTML = "";
    for (let n in addressBook) {
      let addAddress = ` <h3>${addressBook[n].firstName}</h3>
    <h3>${addressBook[n].otherName}</h3>
    <h3>${addressBook[n].email}</h3>
    <h3>${addressBook[n].telNumber}</h3>
    <h3>${addressBook[n].street}</h3>
    <h3>${addressBook[n].town}</h3>
    <h3>${addressBook[n].country}</h3>
    <h3 class='del' id='${n}' onclick=deleteEntry(this)>X</h3>`;
      content.innerHTML += addAddress;
    }
  };

  displayAddress();
};
