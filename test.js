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

  let form = document.createElement('form');
  form.className = 'submit-button primary yui-button'
  form.onSubmit = submitForm

  let newButton = document.createElement('button');
  newButton.innerText = 'fire tests'
  newButton.id = 'testFire'
  newButton.type = 'submit'

  form.appendChild(newButton);
  uiDiv.appendChild(form);
  head.appendChild(uiDiv);
}

let submitForm = (e) => {
  console.log(e);
  e.preventDefault();
  console.log(1234);
  return false
}
