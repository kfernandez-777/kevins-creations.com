

document.addEventListener("DOMContentLoaded", function () {
    var nextBtn = document.querySelector('.next'),
        prevBtn = document.querySelector('.prev'),
        carousel = document.querySelector('.carousel'),
        list = document.querySelector('.list'),
        item = document.querySelectorAll('.item'),
        runningtime = document.querySelector('.timerunning');
  
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;
  
 
    if (window.innerWidth > 400 && nextBtn) {
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);
    }
  
    
    if (window.innerWidth > 400) {
      function showslider(type) {
        let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
        if (type === 'next') {
          list.appendChild(sliderItemsDom[0]);
          carousel.classList.add('next');
        } else {
          list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
          carousel.classList.add('prev');
        }
  
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
          carousel.classList.remove('next');
          carousel.classList.remove('prev');
        }, timeRunning);
  
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
          if (nextBtn) nextBtn.click();
        }, timeAutoNext);
      }
  
     
      if (nextBtn) nextBtn.onclick = () => showslider('next');
      if (prevBtn) prevBtn.onclick = () => showslider('prev');
    }
  
    
    if (list) {
      let startX = 0;
      let scrollLeft = 0;
  
      list.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = list.scrollLeft;
      });
  
      list.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].pageX;
        const distance = endX - startX;
        const threshold = 50;
  
        if (distance > threshold) {
          list.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        } else if (distance < -threshold) {
          list.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        }
      });
    }
  });
  

  window.hamburg = function () {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) dropdown.classList.add('show');
  };
  
  window.cancel = function () {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) dropdown.classList.remove('show');
  };
  



















































// var nextBtn = document.querySelector('.next'),
//     prevBtn = document.querySelector('.prev'),
//     carousel = document.querySelector('.carousel'),
//     list = document.querySelector('.list'),
//     item = document.querySelectorAll( '.item'),
//     runningtime = document.querySelector('.timerunning')

// let timeRunning = 3000
// let timeAutoNext = 7000

// nextBtn.onclick = function(){
//     showslider('next')
// }

// prevBtn.onclick = function(){
//     showslider('prev')
// }

// let runTimeOut

// let runNextAuto = setTimeout(() => { 
//     nextBtn.click()
// },timeAutoNext)

// function showslider(type) { 
//     let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
//     if(type === 'next'){ 
//         list.appendChild(sliderItemsDom[0])
//         carousel.classList.add('next')
//     } else{
//         list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
//         carousel.classList.add('prev')
//     }

//     clearTimeout(runTimeOut)

//     runTimeOut = setTimeout( () => { 
//         carousel.classList.remove('next')
//         carousel.classList.remove('prev')
//     }, timeRunning)

//     clearTimeout(runNextAuto)
//     runNextAuto = setTimeout(() => {
//         nextBtn.click()
//     }, timeAutoNext)
// }


// function hamburg() {
//     document.querySelector('.dropdown').classList.add('show');
//   }
  
//   function cancel() {
//     document.querySelector('.dropdown').classList.remove('show');
//   }
  




