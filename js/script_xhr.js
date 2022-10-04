const button = document.getElementById('die');
const api = 'https://api.adviceslip.com/advice';

const idContainer = document.getElementById('advice-id');
const adviceContainer = document.getElementById('advice-content');

const getAdvice = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = () => {
        const slip = xhr.response.slip;
        const id = slip.id;
        const advice = slip.advice;

        idContainer.innerText = `Advice # ${id}`;
        adviceContainer.innerText = `"${advice}"`;
    };

    xhr.send();
};

// make initial call of getAdvice
window.addEventListener('click', () => {
    getAdvice();
});

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
