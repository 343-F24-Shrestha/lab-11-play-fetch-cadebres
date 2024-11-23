const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("age").value;
    let resp = await fetch("https://echo.zuplo.io/api?name=" + nombre + "&age=" + edad);
    let data = await resp.json()
    let formatted = JSON.stringify(data, null, 2);

    output.textContent = formatted;
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("age").value;
    let resp = await fetch("https://echo.zuplo.io/api?name=" + nombre + "&age=" + edad, {
        method: "POST",
    });
    let data = await resp.json()
    let formatted = JSON.stringify(data, null, 2);

    output.textContent = formatted;
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("age").value;
    let resp = await fetch("https://echo.zuplo.io/api?", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams( {name: nombre, age: edad} ),
    });
    let data = await resp.json()
    let formatted = JSON.stringify(data, null, 2);

    output.textContent = formatted;
});
