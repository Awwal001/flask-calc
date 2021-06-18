var list1 = [];
var list2 = [];
var list3 = [];

var n = 1;
var x = 0;

function AddRow() {
    var AddRown = document.getElementById("display");
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("course").value;
    list2[x] = document.getElementById("unit").value;
    list3[x] = document.getElementById("grade").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

    n++;
    x++;
}