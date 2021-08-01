fetch('https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=56c997b35f3dabff8cb69c54da778e8f')
.then(response =>response.json())
.then(json => displayUser(json))

function displayUser(data){
  console.log(data)
}
// function displayUser(users){
//     console.log("users", users);
//     const userNames = users.map(user => user.username);
//     for (let i =0 ; i<userNames.length; i++){
//         const user = userNames[i];
//         const ul = document.getElementById("users-container")
//         const li = document.createElement("li");
//         li.innerText = user;
//         ul.appendChild (li);
//   }
// }