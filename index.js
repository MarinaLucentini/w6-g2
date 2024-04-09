const nameUser = document.getElementById("inputName");
const textUser = document.getElementById("inputNameText");
const btnSubmit = document.getElementById("btnSubmit");
const btnDelete = document.getElementById("btnDelete");
const form = document.querySelector("form");
const NAME_USER_INPUT = "name-user";
const nameSavedArray = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameSaved = nameUser.value;
  nameSavedArray.push(nameSaved);
  localStorage.setItem(NAME_USER_INPUT, JSON.stringify(nameSavedArray));

  console.log("salvato");
  const textUserName = localStorage.getItem("name-user");
  console.log(textUserName);

  textUser.innerText = "Il nome salvato è " + nameSaved;
  form.reset();
  console.log(nameSavedArray);
  const existName = JSON.parse(textUserName);
  btnDelete.addEventListener("click", () => {
    console.log(existName);
    console.log(nameSavedArray);
    if (textUserName) {
      textUser.innerText = "Il nome è stato correttamente eliminato";
      existName.pop();
      nameSavedArray.pop();
      localStorage.setItem("name-user", JSON.stringify(existName));
    }
  });
});

let count = 0;
document.getElementById("counter").innerText =
  "sono passati " + count + " secondi";
const timer = () => {
  count = sessionStorage.getItem("timerCount");
  setInterval(() => {
    count++;
    document.getElementById("counter").innerText =
      "sono passati " + count + " secondi";
    sessionStorage.setItem("timerCount", count);
  }, 1000);
};
document.addEventListener("DOMContentLoaded", timer);
