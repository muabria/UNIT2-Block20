const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    root.className = "container";

// Create h1 heading
//className for stlying 

    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS";
    h1.className = "header1"
    root.appendChild(h1);


// Create H2 for List 
    const h2 = document.createElement("h2");
    h2.innerText = "User List";
    h2.className = "header2"
    root.appendChild(h2);

//creating unordered list
let list = document.createElement('ul');

//looping through the user object and creating li element for each object in the array
for(let i=0;i<users.length;i++){
    let userName = document.createElement('li');
    let userAge = document.createElement('li');
    let userOccupation = document.createElement('li');

    userName.innerText = `Name : ${users[i].name}`;
    userAge.innerText = `Age : ${users[i].age}`;
    userOccupation.innerText = `Occupation: ${users[i].occupation}`;

    list.appendChild(userName);
    list.appendChild(userAge);
    list.appendChild(userOccupation);

    let horizontal = document.createElement('hr');
     horizontal.className = 'horizontal';
    list.appendChild(horizontal);
    list.appendChild(document.createElement('br'));
    
}

root.appendChild(list);

}

//call the main function
main(); 