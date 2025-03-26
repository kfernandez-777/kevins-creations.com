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