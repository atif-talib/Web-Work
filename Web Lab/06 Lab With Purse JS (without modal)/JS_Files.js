let students = [{
        name: "Bilal Ali",
        rollNo: "bcsf16a030",
        degree: "BS.CS",
        semester: "7",
        subjects: [
            { name: "Programming", grade: "A" },
            { name: "Discrete Math", grade: "A-" },
            { name: "OOP", grade: "A+" }

        ]
    },
    {
        name: "Maira Akram",
        rollNo: "bcsf16a019",
        degree: "BS.CS",
        semester: "8",
        subjects: [
            { name: "Programming", grade: "C" },
            { name: "Discrete Math", grade: "A" },
            { name: "OOP", grade: "C+" }

        ]
    }, {
        name: "Hasham Sabir",
        rollNo: "bcsf16a042",
        degree: "BS.CS",
        semester: "7",
        subjects: [
            { name: "Programming", grade: "C" },
            { name: "Discrete Math", grade: "A" },
            { name: "OOP", grade: "C+" }

        ]
    }
]

//index.js

//Populate Sign In Button
const studentLogin = document.getElementById("studentLoginDropdownMenu");
for (var i = 0; i < students.length; i++) {

    //create dropdown item for each student
    const ref = document.createElement("a");
    ref.href = "#";
    ref.className = "dropdown-item";
    ref.innerHTML = students[i].name;
    studentLogin.appendChild(ref);
}

//take array of tags with class dropdown-item
let item = document.getElementsByClassName("dropdown-item");


for (let i in item) {

    //when the name from drop down menu clicked
    item[i].addEventListener("click", function() {
        let studentData;
        for (var j = 0; j < students.length; j++) {

            //get the studentData whose name was clicked
            if (item[i].innerHTML == students[j].name) {
                studentData = students[j];
            }
        }

        //show student info in card
        document.getElementById("studentName").innerHTML = studentData.name;
        document.getElementById("studentTotalCreditHours").innerHTML = studentData.rollNo;
        document.getElementById("studentCGPA").innerHTML = studentData.semester;

        //show student info in table
        let tableBody = document.getElementById("studentInfoTableBody");

        tableBody.innerHTML = "";

        let row = document.createElement("tr");

        let data = document.createElement("td");
        let txt = document.createTextNode(studentData.name);
        data.appendChild(txt);

        let data1 = document.createElement("td")
        let txt1 = document.createTextNode(studentData.rollNo);
        data1.appendChild(txt1);

        let data2 = document.createElement("td")
        let txt2 = document.createTextNode(studentData.semester);
        data2.appendChild(txt2);

        let data3 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML = "View Result";
        btn.className = "btn-danger";
        btn.addEventListener("click", function() {

        })
        data3.appendChild(btn);
        row.appendChild(data);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        tableBody.appendChild(row);
    })
}
