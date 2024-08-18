function mySlide(target){
  const slideTargets = document.querySelectorAll(target);

  for(let slideTarget of slideTargets){

    const slideWrapper = slideTarget;
    const slideContainer = slideWrapper.querySelector('.slides')
    const slides = slideContainer.querySelectorAll('li');
    const slideCount = slides.length;
    let currentIdx = 0;
    const slideWidth = 290;
    const slideGap = 30;
    const maxSlides = 4;


    const nextBtn = slideWrapper.querySelector('.next');
    const prevBtn = slideWrapper.querySelector('.prev');
    
    slideContainer.style.width = (slideWidth*slideCount)+(slideGap*(slideCount-1))+'px';
    
    
    function moveSlide(num){
      slideContainer.style.left = `${-num*(slideWidth+slideGap)}px`
        currentIdx=num;
        if(currentIdx === 0){
          prevBtn.style.visibility = 'hidden';
        } else {
          prevBtn.style.visibility = 'visible';
        }
        if(currentIdx === maxSlides){
          nextBtn.style.visibility = 'hidden';
        } else {
          nextBtn.style.visibility = 'visible';
        }
        }
        moveSlide(0);
    
    
        nextBtn.addEventListener('click',()=>{
          if(currentIdx < slideCount-maxSlides){
            moveSlide(currentIdx+1);
          }
          });
        prevBtn.addEventListener('click',()=>{
          if(currentIdx>0){
            moveSlide(currentIdx-1);
          }
    });
  }

//scroll
const topBtn = document.querySelector('#go_top');
const bottmoBtn = document.querySelector('#go_bottom')

topBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });
})
bottmoBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left:0,
    top:9999,
    behavior:'smooth'
  });
})
}
