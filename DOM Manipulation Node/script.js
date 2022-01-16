//Metode manipulation Node
// 1. document.createElement();         Membuat element baru di halaman browser
// 2. document.createTextNode();        Membuat teks baru di halaman browser
// 3. node.appendChild();               Menempel element di akhir dari node
// 4. node.insertBefore();              Menempel element sebelum node tertentu
// 5. parentNode.removeChild();
// 6. parentNode.replaceChild();

// menambahkan elemen baru menggunakan JavaScript

//contoh kita ingin mengambahkan paragraph 4 ke dalam section dengan id a

//algoritma
// - kita tambahkan element/tag 'p' kedalam memori menggunakan JavaScript
// - kita tambahkan isi/textNote kedalam memori menggunakan JavaScript
// - kita gabungkan tag 'p' dan juga isi teksnya menjadi satu
// - setelah tag 'p' dan teksnya sudah menjadi satu baru kita tempelkan ke dalam HTML nya

//Metode appendChild

//kita ingin menambahkan paragraf baru di bawah paragraf 3
//code:
//1. bikin element 'p' dan teks
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Teks barunya ini yaa');

//2. simpan tulisan ke dalam paragraf baru
pBaru.appendChild(teksBaru);

//3. Simpan pBaru diakhir section section A
const sectionA = document.querySelector('#a');
sectionA.appendChild(pBaru);


//Method insert before
//Contoh kita ingin menambahkan item baru setelah item 2, setelah item 1

//Bikin elemen 'li' baru dan juga teksnya
liBaru = document.createElement('li');
const liTeks = document.createTextNode('Ini adalah list yang baru nya');

liBaru.appendChild(liTeks);

//Tangkap element setelahnya. Butuh parent, jadi kita tangkap ul nya

ul = document.querySelector('section#b ul');
li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//Menghapus Child dari document

const link = sectionA.querySelector('a');
sectionA.removeChild(link);

//Replace Child dari document
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const teksH2 = document.createTextNode('Ini adalah judul nya yang baru');

h2.appendChild(teksH2);

sectionB.replaceChild(h2, p4);

h2.style.backgroundColor = 'lightBlue';
pBaru.style.backgroundColor = 'lightBlue';
liBaru.style.backgroundColor = 'lightBlue';