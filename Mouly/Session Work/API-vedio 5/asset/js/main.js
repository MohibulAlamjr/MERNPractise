fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(json => displayUser(json))


function displayUser(users){
    console.log("users", users);
    const userNames = users.map(user => user.username);
    for (let i =0 ; i<userNames.length; i++){
        const user = userNames[i];
        const ul = document.getElementById("users-container")
        const li = document.createElement("li");
        li.innerText = user;
        ul.appendChild (li);
  }
}