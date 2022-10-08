const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})

container.addEventListener('click', (e) => {
    container.classList.toggle('hide');
    e.stopPropagation();
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}