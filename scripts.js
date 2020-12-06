let mainBackground = document.getElementById('main-change-background');
let mainSecondBackground = document.getElementById('main-background_second-layer');
let arrowLeft = document.getElementById('left-arrow');
let arrowRight = document.getElementById('right-arrow');
let pauseBotoom = document.getElementById('pause');

let arrowsContainer = document.getElementById('arrows');

let i = 1;
let j;
let z = 2;
let start;
let timer;
let timePassed;
let height = document.documentElement.scrollHeight;
console.log('height ' + height);
let intervalHeight = height / 25;;
let mainTimer2;


//changeBackground(); //вызываем функцию для первого изображения, потому что таймер еще не срабатывает в этот момент

smoothAnimationVertical();

function changeFirstLayer() {
    console.log('Main i = ' + i + '; z = ' + z);
    if (i == 4) {
        i = 0;
        z = 1;
    } else if (z == 4) {
        z = 0;
        i = 3;
    }
    ('Main после проверки i = ' + i + '; z = ' + z);
    mainBackground.style.backgroundImage = 'url(images/main-container/' + ++i + '.jpg)';

}

function changeSecondLayer() {

    mainSecondBackground.style.backgroundImage = 'url(images/main-container/' + ++z + '.jpg)';
    ('Main после функций i = ' + i + '; z = ' + z);

}


function smoothAnimationVertical() {
    mainBackground.style.bottom = 0 + 'px';
    //intervalHeight = height / 25;
    j = 1;

    start = Date.now(); // запомнить время начала

    animationOfChanging();

    timer = window.setInterval(animationOfChanging, 20);
}

function animationOfChanging() {
    // сколько времени прошло с начала анимации?
    timePassed = Date.now() - start;


    if (timePassed >= 4975) {
        clearInterval(timer);
        return;
    } else if (timePassed >= 4400) {
        draw();
    } else {}
}

function draw() {
    mainBackground.style.bottom = intervalHeight * j++ + 'px';
}

function changeBackground() {
    changeFirstLayer();
    changeSecondLayer();
    smoothAnimationVertical();
}

let mainTimer = window.setInterval(changeBackground, 5000);





function arrowChangeBackgroundLeft(event) {
    clearAnimationBackground();

    changeSecondLayerPrev();
    j = 1;
    mainBackground.style.bottom = 0 + 'px';

    timer = window.setInterval(draw, 20);
    window.setTimeout(animationArrowChangeBackgroundPrev, 600);
}


function changeSecondLayerPrev() {
    console.log('i = ' + i + '; z = ' + z);
    if (i == 4 && z == 1) {
        i = 4;
        z = 5;
    } else if (i == 0 || i == 1) {
        i = 5;
        z = 6;
    } else if (z == 2 || z == 1 || z == 0) {
        i = 5;
        z = 6;
    }
    console.log('Изменили i = ' + i + '; z = ' + z);

    z -= 2;

    mainSecondBackground.style.backgroundImage = 'url(images/main-container/' + z + '.jpg)';
}

function animationArrowChangeBackgroundPrev() {
    clearInterval(timer);
    mainBackground.style.backgroundImage = 'url(images/main-container/' + --i + '.jpg)';
    //mainSecondBackground.style.backgroundImage = 'url(images/main-container/' + i++ + '.jpg)';
    mainBackground.style.bottom = 0 + 'px';
    z++;
    if (z == 5) {
        z = 1;
    } else if (z == 0) {
        z = 4;
    }
    mainSecondBackground.style.backgroundImage = 'url(images/main-container/' + z + '.jpg)';
    console.log('На выходе из ф i = ' + i + '; z = ' + z);
    smoothAnimationVertical();
    mainTimer = window.setInterval(changeBackground, 5000);
}



function arrowChangeBackgroundRight() {
    clearAnimationBackground();
    j = 1;
    mainBackground.style.bottom = 0 + 'px';
    timer = window.setInterval(draw, 20);
    window.setTimeout(animationArrowChangeBackgroundRight, 600);
}

function animationArrowChangeBackgroundRight() {
    clearInterval(timer);
    changeFirstLayer();
    changeSecondLayer();
    mainBackground.style.bottom = 0 + 'px';
    smoothAnimationVertical();
    mainTimer = window.setInterval(changeBackground, 5000);
}



function clearAnimationBackground() {
    clearInterval(mainTimer);
    clearInterval(timer);
}


arrowLeft.addEventListener('click', arrowChangeBackgroundLeft);
arrowRight.addEventListener('click', arrowChangeBackgroundRight);
pauseBotoom.addEventListener('click', clearAnimationBackground);


