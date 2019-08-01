//prepare f for modal window
function modal(){
    alert('work');
};

//slider on header
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

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


//timer for sales-events block

let timeFrom = 1585979; //starting point1
let timeFrom1 = 1585979; //starting point2

const msInMin = 60;
const msInHour = msInMin * 60;
const msInDay = msInHour * 24;

const dayElement = document.getElementById('day');
const hourElement = document.getElementById('hour');
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');

timer();

function timer() {

    const interval = setInterval(() => {
        if (timeFrom > 0) {
            getTime(timeFrom);
            timeFrom--;
        } else {
            clearInterval(interval);
        }

    }, 1000);
}

function getTime(time) {
    const dayCounts = Math.floor(time / msInDay);
    const hourCount = Math.floor(time % msInDay / msInHour);
    const minCount = Math.floor(time % msInHour / msInMin);
    const secCount = Math.floor(time % msInMin);

    if (String(dayCounts).length > 1) {
        dayElement.innerText = dayCounts;
    } else {
        dayElement.innerHTML = '<b>0</b>' + dayCounts;
    }
    if (String(hourCount).length > 1) {
        hourElement.innerText = hourCount;
    } else {
        hourElement.innerHTML = '<b>0</b>' + hourCount;
    }
    if (String(minElement).length > 1) {
        minElement.innerText = minCount;
    } else {
        minElement.innerHTML = '<b>0</b>' + minCount;
    }
    if (String(secCount).length > 1) {
        secElement.innerText = secCount
    } else {
        secElement.innerHTML = '<b>0</b>' + secCount;
    }
};