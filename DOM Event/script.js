//Macam-macam event 
// 1. Mouse event
// 2. Keyboard event
// 3. Resources event
// 4. Focus event
// 5. View event
// 6. Form event
// 7. CSS Animation & Transition event
// 8. Drag & drop event
// dll


// Method event handler
//tambahkan onclick="ubahWarna()" di dalam element p3
const p3 = document.querySelector('section#a .p3');

function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue';
}

//atau panggil onclick dari file javascript
p3.onclick = ubahWarnaP3;

const p2 = document.querySelector('.p2');
p2.addEventListener('click', function(){
    alert('Sakit cuk, jangan di klik');
});



//metode Add event listiner
const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const liTeksBaru = document.createTextNode('Teks Baru nih');
    liBaru.appendChild(liTeksBaru);
    ul.appendChild(liBaru);
});



//Mouse event
// 1. click
// 2. dblclick
// 3. mouseover
// 4. mouseenter
// 5. mouseleave
// 6. mouseup
// 7. wheel

//Keyboard event
// 1. keydown
// 2. keypress
// 3. keyup

//Form event
// 1. reset
// 2. submit

//View event
// 1. resize
// 2. scroll