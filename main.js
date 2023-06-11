//selektovanje svih slika iz foldera
const images = document.querySelectorAll('#images');
console.log(images.length);

//ubacivanje himni drzava
let srbija = new Audio ('muzika/srb.mp3');
let madjarska = new Audio ('muzika/hu.ogg');
let hrvatska = new Audio ('muzika/cro.ogg');
let BIH = new Audio ('muzika/bh.ogg');
let crnagora = new Audio ('muzika/cg.mp3');
let albanija = new Audio ('muzika/al.ogg');
let makedonija = new Audio ('muzika/mkd.ogg');
let bugarska = new Audio ('muzika/bg.mp3');
let rumunija = new Audio ('muzika/ru.ogg');

let zvuk = [srbija,madjarska,hrvatska,BIH,crnagora,albanija,makedonija,bugarska,rumunija];


for(let i = 0;i<zvuk.length;i++)
{
    images[i].addEventListener('mouseover', ()=>{  
          zvuk[i].play();
    })
    images[i].addEventListener('mouseout', () =>{
        zvuk[i].pause();
        zvuk[i].currentTime = 0;
    })
}