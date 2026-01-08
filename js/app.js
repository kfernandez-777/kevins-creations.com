// const olLinks = document.querySelectorAll('header nav a');

// const activePage = () => { 
//     olLinks.forEach (link => { 
//         link.classList.remove('active');

//     });
// };

// olLinks.forEach((link,idx) =>{ 
//     link.addEventListener('click', () => {
//         if (!link.classList.contains('active')) { 
//             activePage();
//             link.classList.add ('active');
//         }
//     });
// });








var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll( '.item'),
    runningtime = document.querySelector('.timerunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showslider('next')
}

prevBtn.onclick = function(){
    showslider('prev')
}

let runTimeOut

let runNextAuto = setTimeout(() => { 
    nextBtn.click()
},timeAutoNext)

function showslider(type) { 
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){ 
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => { 
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)
}


let mm = WebGLSampler.matchMedia();

mm.add("(min-width: 400px)", () => {
    Profile.to('.',{
        duration:3
    });

});