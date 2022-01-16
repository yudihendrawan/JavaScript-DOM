//DOM selection
//document.getElementById('') -> Element
const judul = document.getElementById('judul');
judul.style.backgroundColor='yellow';
judul.style.color='grey';
judul.innerHTML='Yudi Hendrawan';

//document.getElementByTagName('') -> HTMLColection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++){ 
    p[i].style.backgroundColor='lightblue';
}

//document.getElementByClassName('') -> HTMLColection
const p1 = document.getElementsByClassName('p1')[0];
p1.style.color='green';
//document.querySelector('') -> Element
const p4 = document.querySelector('#b p');
p4.style.color='grey';
p4.style.backgroundColor='yellow';


//secelctor dengan elemen yang tidak mempunyai id. di hitung dari child ke berapa
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor='orange';
    
//document.querySelectorAll('') -> html collection
const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++){
    li[i].innerHTML = 'Item List';
}

//mengubah root dari selectors/mempersempit root
const elementB = document.getElementById('b')
const b =  elementB.querySelector('li');
    b.style.backgroundColor ='red';



