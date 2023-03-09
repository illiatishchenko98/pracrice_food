window.addEventListener('DOMContentLoaded', () => {
    const tab = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');



    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        })
    }

    tab.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tab[i].classList.add('tabheader__item_active');
    };



hideTabContent();
showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
        tab.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});
});