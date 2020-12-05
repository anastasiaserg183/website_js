let mainBackground = document.getElementById('main-change-background');
let mainSecondBackground = document.getElementById('main-background_second-layer');
let arrowLeft = document.getElementById('left-arrow');
let arrowRight = document.getElementById('right-arrow');

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


changeBackground(); //вызываем функцию для первого изображения, потому что таймер еще не срабатывает в этот момент

function changeFirstLayer() {
    if (i == 5) {
        i = 1;
        z = 2;
    } else if (i == 0) {
        i = 1;
        z = 2;
    } else if (z == 5) {
        z = 1;
        i = 4;
    } else if (z == 0) {
        i = 4;
        z = 1;
    }

    mainBackground.style.background = 'url(images/main-container/' + i++ + '.jpg)';

}

function changeSecondLayer() {

    mainSecondBackground.style.background = 'url(images/main-container/' + z++ + '.jpg)';

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
    //arrowLeft.removeEventListener('click', arrowChangeBackgroundLeft);
    clearAnimationBackground();

    if (i == 0) {
        i = 4;
        z = 1;
    } else if (i == 5) {
        i = 1;
        z = 2;
    } else if (z == 0) {
        z = 4;
        i = 3;
    } else if (z == 5) {
        z = 1;
        i = 4;
    }

    mainBackground.style.background = 'url(images/main-container/' + i-- + '.jpg)';

    mainSecondBackground.style.background = 'url(images/main-container/' + z-- + '.jpg)';


    //arrowLeft.addEventListener('click', arrowChangeBackgroundLeft);
    mainTimer = window.setInterval(changeBackground, 5000);
}

function arrowChangeBackgroundRight() {
    clearAnimationBackground();
    changeFirstLayer();
    changeSecondLayer();
    j = 1;
    mainBackground.style.bottom = 0 + 'px';
    timer = window.setInterval(draw, 20);
    window.setTimeout(animationArrowChangeBackgroundRight, 600);

    mainTimer = window.setInterval(changeBackground, 5000);
}

function animationArrowChangeBackgroundRight() {
    clearInterval(timer);
    changeFirstLayer();
    changeSecondLayer();
}



function clearAnimationBackground() {
    clearInterval(mainTimer);
    clearInterval(timer);
}


arrowLeft.addEventListener('click', arrowChangeBackgroundLeft);
arrowRight.addEventListener('click', arrowChangeBackgroundRight);


/*




let mainBackground = document.getElementById('main-change-background');
let mainSecondBackground = document.getElementById('main-background_second-layer');
let arrowLeft = document.getElementById('left-arrow');
let arrowRight = document.getElementById('right-arrow');

let arrowsContainer = document.getElementById('arrows');

let i = 1;
let j;
let z = 2;
let start;
let timer;
let timePassed;
let height = document.documentElement.scrollHeight;
console.log('height ' + height);
let intervalHeight = 0;


changeBackground(); //вызываем функцию для первого изображения, потому что таймер еще не срабатывает в этот момент

function changeFirstLayer() {
    if (i == 5) {
        i = 1;
        z = 2;
    } else if (i == 0) {
        i = 1;
        z = 2;
    }
    
    mainBackground.style.background = 'url(images/main-container/' + i++ + '.jpg)';
    console.log('i (main)' + i);
}

function changeSecondLayer() {
    if (z == 5) {
        z = 1;
        i = 4;
    } else if (z == 0) {
        i = 4;
        z = 1;
    }
    
    mainSecondBackground.style.background = 'url(images/main-container/' + z++ + '.jpg)';
    console.log('z (main)' + z);
}



function smoothAnimationVertical() {
    mainBackground.style.bottom = 0 + 'px';
    intervalHeight = height / 25;
    j = 1;

    start = Date.now(); // запомнить время начала

    animationOfChanging();

    timer = window.setInterval(animationOfChanging, 20);
}

function animationOfChanging() {
    // сколько времени прошло с начала анимации?
    timePassed = Date.now() - start;


    if (timePassed >= 4975) {
        clearInterval(timer); // закончить анимацию через 3 секунды
        return;
    } else if (timePassed >= 4500) {
        draw(intervalHeight);
    } else {}
}

function draw(intervalHeight) {
    mainBackground.style.bottom = intervalHeight * j++ + 'px';
}

function changeBackground() {

    changeFirstLayer();
    changeSecondLayer();
    smoothAnimationVertical();
}

let mainTimer = window.setInterval(changeBackground, 5000);



function arrowChangeBackgroundLeft(event) {
    arrowLeft.removeEventListener('click', arrowChangeBackgroundLeft);
    clearAnimationBackground();
    this.style.background = 'white';
    console.log('перед определением условий i ' + i);
    console.log('перед определением условий z ' + z);
    if (i == 0) {
        i = 4;
        z = 1;
    } else if (i == 5) {
        i = 1;
        z = 2;
    } else if (z == 0) {
        z = 4;
        i = 3;
    } else if (z == 5) {
        z = 1;
        i = 4;
    }
    console.log('НОМЕР ВЫВОДА КАРТИНКИ i ' + i);
    mainBackground.style.background = 'url(images/main-container/' + i-- + '.jpg)';
    console.log('номер после вывода i' + i);
    
    console.log('НОМЕР ВЫВОДА КАРТИНКИ z ' + z);
    mainSecondBackground.style.background = 'url(images/main-container/' + z-- + '.jpg)';
    console.log('номер после вывода z ' + z);

    arrowLeft.addEventListener('click', arrowChangeBackgroundLeft);
    mainTimer = window.setInterval(changeBackground, 5000);
}

function clearAnimationBackground() {
    clearInterval(mainTimer);
    clearInterval(timer);
}


arrowLeft.addEventListener('click', arrowChangeBackgroundLeft);
/*arrowRight.addEventListener('click', arrowChangeBackgroundRight);

*/
