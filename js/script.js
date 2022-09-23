const btn = document.getElementById('btn');
const api = 'https://api.adviceslip.com/advice';

const idContainer = document.getElementById('advice-id');
const adviceContainer = document.getElementById('advice-content');

btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.responseType = 'json';

    xhr.onload = () => {
        const slip = xhr.response.slip;
        const id = slip.id;
        const advice = slip.advice;

        idContainer.innerText = `Advice # ${id}`;
        adviceContainer.innerText = advice;
    };

    xhr.send();
});
