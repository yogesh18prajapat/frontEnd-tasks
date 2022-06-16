let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Name";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Email";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "DOB";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


function createTable(){
    var row = document.createElement("tr");
    var data_1 = document.createElement("td");
    data_1.innerHTML = "Name";
    var data_2 = document.createElement("td");
    data_2.innerHTML = "Email";
    var data_3 = document.createElement("td");
    data_3.innerHTML = "DOB";
    
    row.appendChild(data_1);
    row.appendChild(data_2);
    row.appendChild(data_3);
    tbody.appendChild(row_1);
    console.log("Function called") 
}
// function createTable() {
  
//   let name = document.getElementById("name").value;
//   let email = documnet.getElementById("email").value;
//   let dob = document.getAnimations("date").value;

//   createRow(name,email,dob);
// }

// function createRow(name,email,dob){

//   let row = document.createElement("tr");
//   let heading_1 = document.createElement("td");
//   heading_1.innerHTML = name;
//   let heading_2 = document.createElement("td");
//   heading_2.innerHTML = email;
//   let heading_3 = document.createElement("td");
//   heading_3.innerHTML = dob;

//   tbody.appendChild(row);

//   row.appendChild(heading_1);
//   row.appendChild(heading_2);
//   row.appendChild(heading_3);
// }
