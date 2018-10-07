for (let i = 1; i <= 16; i++) {
  let mydivs = document.createElement('div');
  document.body.appendChild(mydivs);
}

function rand(num) {
  return Math.floor(Math.random()*(num))
}

function bgc() {
  let rc = 'rgb(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ')';
  return rc;
}


let divs = document.querySelectorAll('div');

/* for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgc();
  }*/

 for (let i = 0; i == divs.length; i++) {
   divs[i].style.backgroundColor = bgc();
}