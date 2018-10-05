let myImg = document.querySelector('img');

myImg.onclick = function() {
  let mySrc = myImg.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImg.setAttribute ('src', 'images/download.png');
  } else {
    myImg.setAttribute ( 'src', 'images/firefox-icon.png');
  }
}

let but = document.querySelector('button');
let h = document.querySelector('h1');

function setUser() {
  let nm = prompt('Enter your name');
  localStorage.setItem('name', nm);
  h.textContent = 'Mozilla is the shit ' + nm;
}

if (!localStorage.getItem('name')) {
  setUser();
} else {
  let sn = localStorage.getItem('name');
  h.textContent = 'MOZILLA is the SHIT, ' + sn;
}

but.onclick = function() {
  setUser();
}