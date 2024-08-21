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
const bottmoBtn = document.querySelector('#go_bottom');

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



window.onload = function() {
  // 쿠키 체크
  if (document.cookie.indexOf('popupClosed=true') === -1) {
      document.getElementById('popup').style.display = 'block';
  }

  // '오늘 하루 안보기' 버튼 클릭 이벤트
  document.getElementById('closePopup').onclick = function() {
      setCookie('popupClosed', 'true', 1); // 1일 동안 쿠키 설정
      document.getElementById('popup').style.display = 'none';
  };

  // '닫기' 버튼 클릭 이벤트
  document.getElementById('closeNow').onclick = function() {
      document.getElementById('popup').style.display = 'none';
  };
};

// 쿠키 설정 함수
function setCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
alert('본 사이트는 구직용 포트폴리오 입니다.');