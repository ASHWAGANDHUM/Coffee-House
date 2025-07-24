const menuButtonEl = document.querySelectorAll('.menu__button'); // NodeList с кнопками
const menuCardsEl = document.querySelectorAll('.menu__cards'); // NodeList с блоками карточек

function showCardMenu(activeIndex) {

    if (menuCardsEl[activeIndex].classList.contains('menu__cards_show')) {
        return;
    };

    menuCardsEl.forEach((card, index) => {
        if (index !== activeIndex) {
            card.classList.remove('menu__cards_show');
        };
    });

    setTimeout(() => {
        menuCardsEl[activeIndex].classList.add('menu__cards_show');
    }, 250);

}

menuButtonEl.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        menuButtonEl.forEach((b) => b.classList.remove('menu__button_active'));
    btn.classList.add('menu__button_active');
    });

    btn.addEventListener('click', () => {
        showCardMenu(index);
    });

});

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