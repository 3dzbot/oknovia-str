"use strict";

// <================== modal window for click on the certificate =================>
var modalCertificate = document.getElementsByClassName('modal-certificate')[0]; //modal window with certificate

var arrCertificate = document.querySelectorAll('.certificates-flex'); //array with our certificate-block

arrCertificate.forEach(function (item) {
  item.addEventListener('click', newModal);
});

function newModal(e) {
  var modCertImg = document.querySelector('.modal-certificate-img');
  var target = e.target;
  var imgSrc = target.getAttribute('data-src');
  modalCertificate.style.display = 'block';

  modalCertificate.onwheel = function (e) {
    e.preventDefault();
  }; //disabled default event


  modalCertificate.style.top = pageYOffset + 'px';
  modCertImg.style.backgroundImage = 'url(' + imgSrc + ')';
}

modalCertificate.addEventListener('click', function () {
  //cover modalW after click on him
  modalCertificate.style.display = 'none';
}); //<====================== modal w on click header|footer button ===================>

var modalWindow = document.querySelector('.modal-window'); //определил блок

function modal() {
  //повесил событие на кнопку
  modalWindow.style.display = 'block'; //при клике возникает модальное окно

  modalWindow.style.top = pageYOffset + 'px'; //установил верхнюю границу мод.окна с учетом скрола

  modalWindow.onwheel = function (e) {
    //отключил прокрутку при активном модальном окне
    e.preventDefault();
  };
}

modalWindow.onclick = function (e) {
  //установил событие закрытия по клику на модальном окне
  if (e.target.tagName == 'INPUT' || e.target.tagName == 'BUTTON' || e.target.tagName == 'SELECT') return;
  modalWindow.style.display = 'none';
}; //<====================== slider on header ============================>


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
  clearInterval(slideInterval);
  nextSlide();
};

previous.onclick = function () {
  clearInterval(slideInterval);
  previousSlide();
}; //<======================== smooth scrolling =====================>
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
}); //<================ timer for sales-events block(very bad) ================>

var timeFrom = 311761; //starting point1 in sec

var timeFrom1 = 579515; //starting point2

var msInMin = 60;
var msInHour = msInMin * 60;
var msInDay = msInHour * 24;
var dayElement1 = document.getElementById('day1');
var dayElement2 = document.getElementById('day2');
var hourElement1 = document.getElementById('hour1');
var hourElement2 = document.getElementById('hour2');
var minElement1 = document.getElementById('min1');
var minElement2 = document.getElementById('min2');
var secElement1 = document.getElementById('sec1');
var secElement2 = document.getElementById('sec2');
timer1(); //start timer function for 1st timer

timer2(); //start timer function for 2nd timer

function timer1() {
  var interval1 = setInterval(function () {
    if (timeFrom > 0) {
      getTime1(timeFrom);
      timeFrom--;
    } else {
      clearInterval(interval1);
    }
  }, 1000);
}

function timer2() {
  var interval2 = setInterval(function () {
    if (timeFrom1 > 0) {
      getTime2(timeFrom1);
      timeFrom1--;
    } else {
      clearInterval(interval2);
    }
  }, 1000);
}

function getTime1(time) {
  var dayCounts = Math.floor(time / msInDay);
  var hourCount = Math.floor(time % msInDay / msInHour);
  var minCount = Math.floor(time % msInHour / msInMin);
  var secCount = Math.floor(time % msInMin);

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
}

;

function getTime2(time) {
  var dayCounts = Math.floor(time / msInDay);
  var hourCount = Math.floor(time % msInDay / msInHour);
  var minCount = Math.floor(time % msInHour / msInMin);
  var secCount = Math.floor(time % msInMin);

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
    secElement2.innerText = secCount;
  } else {
    secElement2.innerHTML = '<b>0</b>' + secCount;
  }
}

; // <==================== event on our-service block =====================>

var ourLinksBlock = document.querySelector('.our-links-links'); //array with links

ourLinksBlock.addEventListener('click', function (e) {
  //add evList on the block with links
  var target = e.target;
  if (target.tagName != 'A') return; //checking is this a link?

  var indexBlock = +target.getAttribute('data-index'); //if true - get attribute value

  linksTab(indexBlock); //start function with params
});

function linksTab(index) {
  //work with link and text block
  var textArr = document.querySelectorAll('.our-links-text'); //text blocks on array

  textArr[0].classList.remove('our-links-text-visible'); //remove default class on 1st text-block

  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i].classList.contains('our-links-text-visible')) {
      //checking classList
      textArr[i].classList.remove('our-links-text-visible'); //if true - remove
    }
  }

  textArr[index].classList.add('our-links-text-visible'); //add class to classList on the index.block
}

;