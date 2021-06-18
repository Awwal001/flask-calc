var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var course = document.getElementById("course").value;
    var unit = document.getElementById("unit").value;
    var grade = document.getElementById("grade").value;

    if (!course || !unit || !grade) {
        alert("Please fill");
        return;
    }
    
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = course;
    cell2.innerHTML = unit;
    cell3.innerHTML = grade;

    row++;
}
