const menuButtonEl = document.querySelectorAll('.menu__button'); // NodeList с кнопками
const menuCardsEl = document.querySelectorAll('.menu__cards'); // NodeList с блоками карточек

menuButtonEl.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        menuButtonEl.forEach((b) => b.classList.remove('menu__button_active'));
    btn.classList.add('menu__button_active');
    });

    btn.addEventListener('click', () => {
        showCardMenu(index);
    });

});

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