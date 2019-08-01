"use strict";

//prepare f for modal window
function modal() {
  alert('work');
}

; //slider on header

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
} //плавная прокрутка к якорю
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
}); //timer for sales-events block

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

;