const btnElement = document.getElementById('btn-change-cite');
const citeElement = document.getElementById('cite');
const authorElement = document.getElementById('author');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeCite() {
    let indRandom = randomInt(0, citas.length);
    citeElement.innerText = `"${citas[indRandom].texto}"`;
    authorElement.innerText = citas[indRandom].autor;
}

changeCite();

btnElement.addEventListener('click',  changeCite)

