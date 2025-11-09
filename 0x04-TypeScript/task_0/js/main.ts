interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const studentOne: Student = {
    firstName: "Zeyad",
    lastName: "Alhoussainy",
    age: 30,
    location: "Alexandria, Egypt"
};

const studentTwo: Student = {
    firstName: "Raneem",
    lastName: "Deghidy",
    age: 29,
    location: "Alexandria, Egypt"
};

const studentsList: Student[] = [studentOne, studentTwo];

// Render table using Vanilla JavaScript
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
table.style.border = "1px solid black";

// Create table header
const tableHeadContent = ['First Name', 'Last Name', "Age", 'Location'];
const headerRow = document.createElement("tr");

for (const headText of tableHeadContent) {
    const tableHead = document.createElement("th");
    tableHead.innerText = headText;
    tableHead.style.border = "1px solid black";
    headerRow.appendChild(tableHead);
}

thead.appendChild(headerRow);

// Create table body with student data
for (const student of studentsList) {
    const row = document.createElement("tr");
    
    const tdFirstName = document.createElement("td");
    tdFirstName.textContent = student.firstName;
    tdFirstName.style.border = "1px solid black";
    row.appendChild(tdFirstName);
    
    const tdLastName = document.createElement("td");
    tdLastName.textContent = student.lastName;
    tdLastName.style.border = "1px solid black";
    row.appendChild(tdLastName);
    
    const tdAge = document.createElement("td");
    tdAge.textContent = student.age.toString();
    tdAge.style.border = "1px solid black";
    row.appendChild(tdAge);
    
    const tdLocation = document.createElement("td");
    tdLocation.textContent = student.location;
    tdLocation.style.border = "1px solid black";
    row.appendChild(tdLocation);
    
    tbody.appendChild(row);
}

// adding the table content to html
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);