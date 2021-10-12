let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// Function that increments count once button is clicked
function increment() {
  count++;
  countEl.innerHTML = count;
}
increment();

// Function to display the value of count and previous entries
function save() {
  let savedMessage = `${count} - `;
  saveEl.innerText += savedMessage;
  countEl.innerHTML = 0;
  count = 0;
}
// Function to reset counter
// function reset() {
//   let resume = 0;
//   countEl.innerHTML = resume;
//   console.log(resume);
// }
