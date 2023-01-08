
      // VARIABLES

let hidBtn = document.querySelector('.openshare');
let share = document.querySelector('.share-icons');
let showBtn = document.querySelector('.closeshare');
let screenwidth = visualViewport.width;
let author = document.querySelector('.author');
let shareIcon2 = document.querySelector('.shareicon-2');

// LOGICS

if (screenwidth <=1200){ 
hidBtn.addEventListener('click', function(){
author.style.display = 'none';
share.style.display = 'inline-flex';
showBtn.addEventListener('click', function(){
  author.style.display = 'inline-flex';
share.style.display = 'none'; 
}
);
}
)}
else{
   hidBtn.addEventListener('click', function(){
author.style.display = 'inline-flex';
share.style.display = 'inline-flex';
shareIcon2.classList.add('active');
hidBtn.classList.add('bgdchange');
showBtn.addEventListener('click', function(){
  author.style.display = 'inline-flex';
share.style.display = 'none'; 
shareIcon2.classList.remove('active');
hidBtn.classList.remove('bgdchange');
}
);
}
)};

  
