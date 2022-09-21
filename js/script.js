const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.adviceslip.com/advice', true);

    xhr.send();

    xhr.onreadystatechange = (e) => {
        const response = xhr.responseText;

        console.log(response);

        // const json = JSON.parse(response);

        // console.log(json);

        const advice = document.getElementById('advice');
    };

    xhr.abort();
});
