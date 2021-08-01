

document.getElementById("submit").addEventListener("click", function(){
    const title = document.getElementById('title').value;
    const body = document.getElementById('body_content').value;
    console.log(title, body);
})

function postToServer (PostInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        body : JSON.stringify(PostInfo),
        headers : {
           "Content-type": "application/json; charset = UFT-8"
        }
    })
    .then(response => response.json())
    .then (data => console.log(data));
}

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