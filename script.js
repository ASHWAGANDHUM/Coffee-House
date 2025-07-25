const buttonToContacts = document.getElementById('contact-button');

buttonToContacts.addEventListener('click', () => {
    document.getElementById('contacts').scrollIntoView({
        behavior: 'smooth'
    });
});

const buttonToMenu = document.getElementById('menu-button');

buttonToMenu.addEventListener('click', () => {
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
});


const menuButtons = document.querySelectorAll('.menu__button'); // NodeList с кнопками
const menuCards = document.querySelectorAll('.menu__cards'); // NodeList с блоками карточек

function showCardMenu(activeIndex) {

    if (menuCards[activeIndex].classList.contains('menu__cards_show')) {
        return;
    };

    menuCards.forEach((card, index) => {
        if (index !== activeIndex) {
            card.classList.remove('menu__cards_show');
        };
    });

    setTimeout(() => {
        menuCards[activeIndex].classList.add('menu__cards_show');
    }, 250);

}

menuButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        menuButtons.forEach((b) => b.classList.remove('menu__button_active'));
    btn.classList.add('menu__button_active');
    });

    btn.addEventListener('click', () => {
        showCardMenu(index);
    });

});

//////////////// НАЖАТИЕ НА ИЗОБРАЖЕНИЕ В ВЕРХНЕЙ ЧАСТИ САЙТА

const images = [
    document.getElementById('coffee'),
    document.getElementById('desserts'),
    document.getElementById('snacks')
];


images.forEach((imgEl, index) => {
  imgEl.addEventListener('click', () => {

    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });

    // Убираем активный класс со всех кнопок
    menuButtons.forEach(btn => btn.classList.remove('menu__button_active'));

    // Немного ждем прокрутки и показываем нужный блок
    setTimeout(() => {
        menuButtons[index].classList.add('menu__button_active');
      showCardMenu(index);
    }, 500);
  });
});

//////////////////// ЯНДЕКС.КАРТА

let place = [59.958021, 30.290751];

function init() {
    let map = new ymaps.Map('map', {
        center: place,
        zoom: 12
    });

    let placemark = new ymaps.Placemark(place, {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/map/marker.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-18, -110]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // даляем контроль зуммирования
    map.controls.remove('rulerControl'); // удаляем контроль правил

    map.geoObjects.add(placemark);
}

ymaps.ready(init);