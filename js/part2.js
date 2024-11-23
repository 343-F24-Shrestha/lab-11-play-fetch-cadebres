const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.
    let resp = await fetch("https://reqres.in/api/users?page=1");
    resp = await resp.json();
    const users = resp.data;
    const userList = document.getElementById('user-list');

    users.forEach(user => {
        let div = document.createElement('div');
        div.className = 'card';
        const header = document.createElement('h2');
        header.textContent = user.first_name + " " + user.last_name;
        const image = document.createElement('img');
        image.src = user.avatar;
        image.alt = user.first_name + " " + user.last_name;

        div.appendChild(header);
        div.appendChild(image);
        userList.appendChild(div);
    });
});
