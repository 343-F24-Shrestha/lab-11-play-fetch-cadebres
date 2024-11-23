const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.
    let word = document.getElementById("word").value;
    try {
        let resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
        let data = await resp.json()
        let formatted = JSON.stringify(data, null, 2);
        output1.textContent = formatted;
    } catch (err) {
        alert("Word does not exist");
    }
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    // Make a request to your second API here. Put the response's data in output-2.
    // If your response has no body, put the status code in output-2.
    let word = document.getElementById("word").value;
    let resp = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    let data = await resp.json()
    let formatted = JSON.stringify(data, null, 2);
    output2.textContent = formatted;
});
