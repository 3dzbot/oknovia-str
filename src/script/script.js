// <================== modal window for click on the certificate =================>
let modalCertificate = document.getElementsByClassName('modal-certificate')[0]; //modal window with certificate
let arrCertificate = document.querySelectorAll('.certificates-flex'); //array with our certificate-block

arrCertificate.forEach(item => {
    item.addEventListener('click', newModal)
});

function newModal(e){
    let modCertImg = document.querySelector('.modal-certificate-img');
    let target = e.target;
    let imgSrc = target.getAttribute('data-src');
        modalCertificate.style.display = 'block';
        modalCertificate.onwheel = function (e) { e.preventDefault() }; //disabled default event
        modalCertificate.style.top = pageYOffset+'px';
        modCertImg.style.backgroundImage = 'url('+imgSrc+')';
}

modalCertificate.addEventListener('click', ()=>{ //cover modalW after click on him
    modalCertificate.style.display = 'none';
});

//<====================== modal w on click header|footer button ===================>
let modalWindow = document.querySelector('.modal-window'); //определил блок

function modal(){   //повесил событие на кнопку
    modalWindow.style.display = 'block';        //при клике возникает модальное окно
    modalWindow.style.top = pageYOffset+'px';   //установил верхнюю границу мод.окна с учетом скрола
    modalWindow.onwheel = function (e) {   //отключил прокрутку при активном модальном окне
        e.preventDefault()
    }
}

modalWindow.onclick = function(e){   //установил событие закрытия по клику на модальном окне
    if ((e.target.tagName == 'INPUT')||(e.target.tagName == 'BUTTON')||(e.target.tagName == 'SELECT')) return;
    modalWindow.style.display = 'none';
};

//<====================== slider on header ============================>
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

function nextSlide() { goToSlide(currentSlide+1); }
function previousSlide() { goToSlide(currentSlide-1); }

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function() {
    clearInterval(slideInterval);
    nextSlide();
};
previous.onclick = function() {
    clearInterval(slideInterval);
    previousSlide();
};

//<======================== smooth scrolling =====================>
//плавная прокрутка к якорю
// собираем все якоря; устанавливаем время анимации и количество кадров

var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;
anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
        // убираем стандартное поведение
        e.preventDefault(); // для каждого якоря берем соответствующий ему элемент и определяем его координату Y

        var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top; // запускаем интервал, в котором

        var scroller = setInterval(function () {
            // считаем на сколько скроллить за 1 такт
            var scrollBy = coordY / framesCount; // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто

            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            } // время интервала равняется частному от времени анимации и к-ва кадров

        }, animationTime / framesCount);
    });
});


//<================ timer for sales-events block(very bad) ================>

let timeFrom = 311761; //starting point1 in sec
let timeFrom1 = 579515; //starting point2

const msInMin = 60;
const msInHour = msInMin * 60;
const msInDay = msInHour * 24;

const dayElement1 = document.getElementById('day1');
const dayElement2 = document.getElementById('day2');
const hourElement1 = document.getElementById('hour1');
const hourElement2 = document.getElementById('hour2');
const minElement1 = document.getElementById('min1');
const minElement2 = document.getElementById('min2');
const secElement1 = document.getElementById('sec1');
const secElement2 = document.getElementById('sec2');

timer1();  //start timer function for 1st timer
timer2();  //start timer function for 2nd timer

function timer1() {

    const interval1 = setInterval(() => {
        if (timeFrom > 0) {
            getTime1(timeFrom);
            timeFrom--;
        } else {
            clearInterval(interval1);
        }

    }, 1000);
}
function timer2() {

    const interval2 = setInterval(() => {
        if (timeFrom1 > 0) {
            getTime2(timeFrom1);
            timeFrom1--;
        } else {
            clearInterval(interval2);
        }

    }, 1000);
}

function getTime1(time) {
    const dayCounts = Math.floor(time / msInDay);
    const hourCount = Math.floor(time % msInDay / msInHour);
    const minCount = Math.floor(time % msInHour / msInMin);
    const secCount = Math.floor(time % msInMin);

    if (String(dayCounts).length > 1) {
        dayElement1.innerText = dayCounts;
    } else {
        dayElement1.innerHTML = '<b>0</b>' + dayCounts;
    }
    if (String(hourCount).length > 1) {
        hourElement1.innerText = hourCount;
    } else {
        hourElement1.innerHTML = '<b>0</b>' + hourCount;
    }
    if (String(minCount).length > 1) {
        minElement1.innerText = minCount;
    } else {
        minElement1.innerHTML = '<b>0</b>' + minCount;
    }
    if (String(secCount).length > 1) {
        secElement1.innerText = secCount;
    } else {
        secElement1.innerHTML = '<b>0</b>' + secCount;
    }
};

function getTime2(time) {
    const dayCounts = Math.floor(time / msInDay);
    const hourCount = Math.floor(time % msInDay / msInHour);
    const minCount = Math.floor(time % msInHour / msInMin);
    const secCount = Math.floor(time % msInMin);

    if (String(dayCounts).length > 1) {
        dayElement2.innerText = dayCounts;
    } else {
        dayElement2.innerHTML = '<b>0</b>' + dayCounts;
    }
    if (String(hourCount).length > 1) {
        hourElement2.innerText = hourCount;
    } else {
        hourElement2.innerHTML = '<b>0</b>' + hourCount;
    }
    if (String(minCount).length > 1) {
        minElement2.innerText = minCount;
    } else {
        minElement2.innerHTML = '<b>0</b>' + minCount;
    }
    if (String(secCount).length > 1) {
        secElement2.innerText = secCount
    } else {
        secElement2.innerHTML = '<b>0</b>' + secCount;
    }
};

// <==================== event on our-service block =====================>
let ourLinksBlock = document.querySelector('.our-links-links'); //array with links

ourLinksBlock.addEventListener('click', (e)=>{              //add evList on the block with links
   let target = e.target;
    if(target.tagName != 'A') return;                                    //checking is this a link?
    let indexBlock = +target.getAttribute('data-index');                 //if true - get attribute value
    linksTab(indexBlock);                                                //start function with params
});

function linksTab(index){                                                //work with link and text block
    let textArr = document.querySelectorAll('.our-links-text'); //text blocks on array

    textArr[0].classList.remove('our-links-text-visible');        //remove default class on 1st text-block
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].classList.contains('our-links-text-visible')) {   //checking classList
            textArr[i].classList.remove('our-links-text-visible');//if true - remove
        }
    }
    textArr[index].classList.add('our-links-text-visible');              //add class to classList on the index.block
};