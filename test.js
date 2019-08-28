document.addEventListener("DOMContentLoaded", (event) => {
  let head = document.querySelector('.page-headline')
  if (head && head.innerText ==  "Pipeline yeet") {
    buildButton()
  }
});

let buildButton = () => {
  console.log('building');
  console.log(head);
}
