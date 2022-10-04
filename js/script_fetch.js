const button = document.getElementById('die');
const api = 'https://api.adviceslip.com/advice';

const idContainer = document.getElementById('advice-id');
const adviceContainer = document.getElementById('advice-content');

console.log(button);

const getAdvice = () => {
    const requestHeaders = {
        Accept: 'application/json',
    };

    fetch(api, {
        headers: requestHeaders,
    })
        .then((response) => {
            return response.json();
        })
        .then((adviceObject) => {
            const advice = adviceObject.slip.advice;
            const adviceID = adviceObject.slip.id;

            idContainer.innerText = `Advice # ${adviceID}`;
            adviceContainer.innerText = `"${advice}"`;
        });
};

// make initial call of getAdvice
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
