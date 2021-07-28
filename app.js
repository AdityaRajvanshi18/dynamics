const sliderSlide = document.querySelector('.slider-slide');
const sliderImages = document.querySelectorAll('.slider-slide img');
const boxes = document.querySelectorAll('.box');

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let counter = 1;
const size = 334//sliderImages[0].clientWidth; //this should work but doesnt for some reason?


sliderSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

console.log(boxes)

nextBtn.addEventListener('click',()=>{
    if (counter >= sliderImages.length -1) return;
    sliderSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    sliderSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    
});

prevBtn.addEventListener('click',()=>{
    if (counter<= 0) return;
    sliderSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    sliderSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    
});

function emptyCircles(){
    //give all circles reg
    boxes.forEach(box =>{
        if(box.classList[2] = 'dot'){
            box.classList.remove('dot')
            box.classList.add('reg')
        }
    });    
}

function fillCircle(){
    boxes[counter-1].classList.add('dot');
}

sliderSlide.addEventListener('transitionend', ()=>{
    emptyCircles();
    if(sliderImages[counter].id === 'lastClone'){
        sliderSlide.style.transition = 'none';
        counter = sliderImages.length -2;
        sliderSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
        
    }
    if(sliderImages[counter].id === 'firstClone'){
        sliderSlide.style.transition = 'none';
        counter = sliderImages.length - counter;
        sliderSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    fillCircle();
});
