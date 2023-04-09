let bar = document.querySelector('#bar');
let barTwo = document.querySelector('#barTwo');

bar.onclick = function(){
  document.querySelector('#navigation_small').style.display = 'block';
  bar.style.display = 'none';
  barTwo.style.display = 'block'
}

barTwo.onclick = function() {
  document.querySelector('#navigation_small').style.display = 'none';
  bar.style.display = 'block';
  barTwo.style.display = 'none';
}


let allLi = document.querySelectorAll('#smallNavig > li');
const liElem = Array.from(allLi);

for (let i of liElem) {
  i.onclick = function() {
    document.querySelector('#navigation_small').style.display = 'none';
    barTwo.style.display = 'none';
    bar.style.display = 'block';
  }
}