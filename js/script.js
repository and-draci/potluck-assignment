// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//assigns dishes, only appears when the guest list is full
const assignButton = document.querySelector(".assign");
//populate with the guest's name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

//Adds guest on click
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
});

const clearInput = function () {
  guestInput.value = "";
};
// Adds names to html lito display name on page
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//Limits guest to 8 and triggers guest list full class
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//Select Assigned Items & Build an Array
const assignItems = function () {
  const potluckItems = [
    "salad",
    "sandwiches",
    "pasta",
    "burger",
    "hot dog",
    "dip",
    "fruits",
    "chicken",
    "cake",
    "dinner rolls",
    "potato salad",
    "mac n cheese"
  ];

  //Select Elements & Loop Through the Array
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
}; // End of AsignItems Function

//Add an Event Listener & Update PotluckItems Array

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
