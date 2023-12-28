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
        cache: 'no-cache',
    })
        .then((response) => {
            console.log(response);
            console.log(response.cache);
            return response.json();
        })
        .then((adviceObject) => {
            const advice = adviceObject.slip.advice;
            const adviceID = adviceObject.slip.id;

            adviceContainer.classList.toggle('show');
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
        // toggle waiting ON
        e.target.classList.toggle('waiting');
        getAdvice();
    }, 1000);
    e.target.classList.toggle('waiting');

    setTimeout(() => {
        // toggle waiting OFF
        adviceContainer.classList.toggle('show');
    }, 300);
});
