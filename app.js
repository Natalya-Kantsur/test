// переменные
function $(x) {return document.getElementById(x);}

function _(x) {return document.querySelectorAll(x);}

const itemOfTest = document.querySelectorAll('.test');

const threeTestBtn = document.querySelector('.btn__test-3');

const birthDay = document.querySelectorAll('.select__test');

const cloudMessage = document.querySelector('.cloud');

const loadRun = document.querySelector('.load__run');

const persentRun = document.querySelector('.counter');

const tomorrow = document.querySelector('.event__date');

let now = new Date();

// активный первый тест
itemOfTest[0].classList.add('active');

// скролл к первому тесту
_('.btn__head').forEach(elem => elem.addEventListener('click', () => {
    $('scroll__test').scrollIntoView({block: "start", behavior: "smooth"})
}));

// функция переключения слайдов
function slideTest (i) {itemOfTest[i].classList.remove('active');
itemOfTest[++i].classList.add('active');
}

// переключение первого слайда и скрытие остального контента
_('.btn__test-1').forEach((elem, index) => elem.addEventListener('click', () => {
slideTest (0);
$('wrapper').classList.add('hide')
}));

// переключение второго слайда
_('.btn__test-2').forEach(elem => elem.addEventListener('click', () => {
    slideTest (1);
}));

// переключение слайда 3 и проверка дня рождения
threeTestBtn.addEventListener('click', () => {
let birthClient = birthDay[0].value + '.' + birthDay[1].value + '.' + birthDay[2].value;   
if (birthClient.indexOf('hide') != -1) {
for (elem of birthDay) {
    if (elem.value = 'hide') {
        elem.classList.add('wrong')} 
} } else {slideTest (2);}

let ageClient = now.getFullYear() - Number(birthDay[2].value);
if (ageClient > 36 && ageClient < 45){cloudMessage.innerText += 'Возможно это дедушка или бабушка.';};
if (ageClient >= 46){cloudMessage.innerText += 'Возможно это кто-то из Ваших родителей.';};
});

// переключение слайда 4, анимация загрузки и переключение на 5 вопрос
_('.btn__test-4').forEach(elem => elem.addEventListener('click', () => {
    slideTest(3);
    setTimeout(() => {slideTest(4);}, 2000);
}));

// анимация микрофона
function microAnimation () {
    let i = 0;
    let microTimer = setInterval(() => {
    ++i;
    let width = i + '%';
    loadRun.style.width = width;
    persentRun.innerHTML = width;
    if (i >= 100) {clearInterval(microTimer)}
    }, 50);
}
    
// переключение 5 слайда
_('.btn__test-5').forEach(elem => elem.addEventListener('click', () => {
    slideTest(5);
    microAnimation ();
    setTimeout(() => {slideTest(6);}, 5500);
}));

// завтрашняя дата на последнем экране
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
tomorrow.innerHTML = addZero(now.getDate()+1) + '.' + addZero(now.getMonth()+1) + '.' + now.getFullYear() + ',';

$('btn__message').addEventListener('click', () => {
var x = new XMLHttpRequest();
x.open("GET", "https://swapi.dev/api/people/1/", true);
x.onload = function (){
    alert( x.responseText);
}
x.send(null); }) 
