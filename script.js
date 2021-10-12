let countEl = document.getElementById("count-el");
let count = 0;

// Function that increments count once button is clicked
function increment() {
  count++;
  countEl.innerHTML = count;
}
increment();

// Function to display the value of count
function save() {
  console.log(count);
}
let username = "Amaka";
let message = "You have three new notifications";

let answer = `Hi ${username}, ${message}.`;
console.log(answer);
