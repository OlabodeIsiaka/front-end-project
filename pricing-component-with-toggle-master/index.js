// ================================
//        VARIABLES         
// ================================
const MonthlyPrices =[19.99, 24.99, 39.99]
const YearlyPrices =[199.99, 249.99, 399.99]
const togglebtn = document.querySelector('.toggle');
const toggler = document.querySelector('.inner-circle')
let yearlyPrices = document.querySelectorAll('.price')

togglebtn.addEventListener('click', (e) => {
e.currentTarget.classList.toggle('active');
let isActive = e.currentTarget.classList.contains('active');
if(isActive){
        for(let i =0; i < MonthlyPrices.length; i++){
 yearlyPrices[i].innerHTML = `$${MonthlyPrices[i]}`
        }
}
else{
       for(let i =0; i < MonthlyPrices.length; i++){
 yearlyPrices[i].innerHTML = `$${(YearlyPrices[i])}`
        }    
}
})
 
