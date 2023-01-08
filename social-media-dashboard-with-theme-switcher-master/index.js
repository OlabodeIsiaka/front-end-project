const toggle =document.querySelector('.toggle-button');
let darkBgs = document.querySelectorAll('.Dbg, .Dbg')
let card1Bgs = document.querySelectorAll('.col')
let card2Bgs = document.querySelectorAll('.col-2')
let textColor1 = document.querySelectorAll('.heading')
let txtColor1 = document.querySelectorAll('.txt-color')
let numbfol1 = document.querySelectorAll('.numbfol')
let textColor2 = document.querySelectorAll('.dark-mode, span ')

console.log(txtColor1)
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
 for( let i = 0; i < darkBgs.length; i++){
    darkBgs[i].classList.toggle('dark-bg')
    } 
   card1Bgs.forEach(element => {
     element.classList.toggle('col')
    element.classList.add('card-Bg')
     
   })
   card2Bgs.forEach(element => {
element.classList.toggle('col-2')
    element.classList.add('col-2-Bg')
   })
textColor1.forEach(element => {
    element.classList.toggle('text-color1')
})
numbfol1.forEach(element => {
    element.classList.toggle('numbfol1')
    element.classList.toggle('numbfol')
})
txtColor1.forEach(element => {
    element.classList.toggle('txt-color')
    element.classList.toggle('txt-color1')
})
   textColor2.forEach(element => {
     element.classList.toggle('text-color2')
   });
});