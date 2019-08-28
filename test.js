document.addEventListener("DOMContentLoaded", (event) => {
  console.log( "ready!" );
  let head = document.querySelector('.page-headline')
  if (head && head.innerText ==  "Pipeline yeet") {
    console.log('Kickoff')
    buildButton()
  }
});

let buildButton = () => {
  console.log('building');
}
