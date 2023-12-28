const button = document.getElementById('die');
const api = 'https://api.adviceslip.com/advice';

const idContainer = document.getElementById('advice-id');
const adviceContainer = document.getElementById('advice-content');

const getAdvice = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.setRequestHeader('accept', 'application/json');

    xhr.onload = () => {
        const slip = JSON.parse(xhr.response).slip;
        const id = slip.id;
        const advice = slip.advice;

        idContainer.innerText = `Advice # ${id}`;
        adviceContainer.innerText = `"${advice}"`;
    };

    xhr.send();
};

getAdvice();

// animate button and call getAdvice
button.addEventListener('click', (e) => {
    if (e.target.classList.contains('waiting')) {
        return;
    }
    setTimeout(() => {
        e.target.classList.toggle('waiting');
        getAdvice();
    }, 3000);
    e.target.classList.toggle('waiting');
});
