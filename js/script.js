const btn = document.getElementById('btn');
const api = 'https://api.adviceslip.com/advice';

const idContainer = document.getElementById('advice-id');
const adviceContainer = document.getElementById('advice-content');

const getAdvice = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.responseType = 'json';

    xhr.onload = () => {
        const slip = xhr.response.slip;
        const id = slip.id;
        const advice = slip.advice;

        idContainer.innerText = `Advice # ${id}`;
        adviceContainer.innerText = `"${advice}"`;
    };

    xhr.send();
};

getAdvice();

btn.addEventListener('click', () => {
    setTimeout(() => {
        btn.classList.toggle('waiting');
    }, 3000);
    btn.classList.toggle('waiting');
    setTimeout(getAdvice, 3000);
});
