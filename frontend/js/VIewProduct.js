const menuBar = document.querySelector('.fa-bars');
const menuBarContainer = document.querySelector('.menu-bar')
const containerOfNav = document.querySelector('.container1')
menuBar.addEventListener('click', clickMenu);

function clickMenu() {
    containerOfNav.classList.toggle('active');
    menuBar.classList.toggle('active');
    const createCloseBtn = document.createElement('i')
    createCloseBtn.className = 'fa-solid fa-close'
    containerOfNav.appendChild(createCloseBtn)
    createCloseBtn.addEventListener('click', () => {
        containerOfNav.classList.toggle('active');
        menuBar.classList.toggle('active');
    })
}