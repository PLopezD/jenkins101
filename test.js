let head;
document.addEventListener("DOMContentLoaded", (event) => {
  head = document.querySelector('.page-headline')
  if (head && head.innerText ==  "Pipeline yeet") {
    buildUiElements()
  }
});

let buildUiElements = () => {
  console.log('building');
  let uiDiv = document.createElement('div');
  uiDiv.className = 'submit-button primary'
  let newButton = document.createElement('button');
  newButton.innerText = 'fire tests'

  uiDiv.appendChild(newButton);
  head.appendChild(uiDiv);
}
