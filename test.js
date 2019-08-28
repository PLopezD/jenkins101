let head;
document.addEventListener("DOMContentLoaded", (event) => {
  head = document.querySelector('.page-headline')
  if (head && head.innerText ==  "Pipeline yeet") {
    buildButton()
  }
});

let buildButton = () => {
  console.log('building');
  let newButton = document.createElement('button');
  newButton.innerText = 'yeettown'
  newButton.className = 'submit-button primary'
  head.appendChild(newButton);

}
