let mainBackground = document.getElementById('main-change-background');
let mainSecondBackground = document.getElementById('main-background_second-layer');
let arrowLeft = document.getElementById('left-arrow');

/*let arrows = document.getElementsByClassName('arrow');*/
let arrowsContainer = document.getElementById('arrows');

let i = 0;
let j;
let z = 1;
let start;
let timer;
let timePassed;
let height = document.documentElement.scrollHeight;
console.log('height ' + height);



changeBackground(); //вызываем функцию для первого изображения, потому что таймер еще не срабатывает в этот момент

function changeFirstLayer() {
    mainBackground.style.background = 'url(images/main-container/' + ++i + '.jpg)';
    
    if (i == 4) {
        i = 0;
    }
}

function changeSecondLayer() {
    mainSecondBackground.style.background = 'url(images/main-container/' + ++z + '.jpg)';

    if (z == 4) {
        z = 0;
    }
}

function smoothAnimationVertical() {
    mainBackground.style.bottom = 0 + 'px';
    let intervalWidth = height/25;
    j = 1;
    
    start = Date.now(); // запомнить время начала
    
    
    function animationOfChanging() {
       // сколько времени прошло с начала анимации?
        timePassed = Date.now() - start;
        

        if (timePassed >= 4975) {
            clearInterval(timer); // закончить анимацию через 3 секунды
            return;
        } else if (timePassed >= 4500) {
            draw(timePassed); 
        } else {}  
    }

    // в то время как timePassed идёт от 0 до 5000

    function draw(timePassed) {
        mainBackground.style.bottom = intervalWidth * j++ + 'px';
    }
    
    timer = window.setInterval(animationOfChanging, 20);
}



function changeBackground() {
    
    changeFirstLayer();
    changeSecondLayer();
    smoothAnimationVertical();   
}

let mainTimer = window.setInterval(changeBackground, 5000);


function arrowChangeBackgroundLeft(event) {
    clearInterval(mainTimer);
    clearInterval(timer);
    this.style.background = 'white';
}


arrowLeft.addEventListener('click', arrowChangeBackgroundLeft);
arrowRight.addEventListener('click', arrowChangeBackgroundRight);




















