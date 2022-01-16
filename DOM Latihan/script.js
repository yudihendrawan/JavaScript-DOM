const button = document.querySelector('button');
const h2 = document.querySelector('h2');
// const body = document.querySelector ('body');
button.addEventListener('click', function(){
    // document.body.style.backgroundColor='lightblue'
    document.body.classList.toggle('ubah-background')
});


const buttonBaru = document.createElement('button');
const teksBtn = document.createTextNode('Tombol random warna');

buttonBaru.appendChild(teksBtn);
buttonBaru.setAttribute('type', 'button')

button.after(buttonBaru);

buttonBaru.addEventListener('click', function(){

    const r = Math.round(Math.random() *255 + 1);
    const g = Math.round(Math.random() *255 + 1);
    const b = Math.round(Math.random() *255 + 1);
    // console.log(random);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    // console.log(sMerah.value); 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
    // console.log(sMerah.value); 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    // console.log(sMerah.value); 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});


document.body.addEventListener('mousemove', function(e){

    console.log(e.clientX);

});