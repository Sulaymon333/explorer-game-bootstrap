const menuBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        menuBtn.querySelector('.menu-btn').src = './images/open.svg';
    } else {
        navList.classList.add('open');
        menuBtn.querySelector('img').src = './images/close.svg';
    }
});
