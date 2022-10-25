const body = document.querySelector('body');
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');

theme1.addEventListener('click', () => {
    body.classList.remove('theme2', 'theme3')
    body.classList.add('theme1')
});

theme2.addEventListener('click', () => {
    body.classList.remove('theme1', 'theme3')
    body.classList.add('theme2');
})

theme3.addEventListener('click', () => {
    body.classList.remove('theme1', 'theme2')
    body.classList.add('theme3')
})