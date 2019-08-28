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
  newButton.value = 'yeettown'
  head.appendChild(newButton);

}
