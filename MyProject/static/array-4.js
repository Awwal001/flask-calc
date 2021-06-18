var myArr = [];

function toGrade(string) {
    switch(string) {
        case '4':
            return 'A';
        case '3':
            return 'B';
        case '2':
            return 'C';
        case '1':
            return 'D';
        case '0':
            return 'F';
        default:
            return '';
    }
}

function pushData() {
    var course = document.getElementsByClassName('course');
    var unit = document.getElementsByClassName('unit');
    var grade = document.getElementsByClassName('grade');
    

    var cs = [];
    var un = [];
    var gd = [];

    Array.from(course).forEach((c) => {
        cs.push(c.value)
   })

   Array.from(unit).forEach((u) => {
        un.push(u.value)
   })

   Array.from(grade).forEach((g) => {
        gd.push(g.value)
   })

    var myArr = [];
    myArr.push(cs);
    myArr.push(un);
    myArr.push(gd); 

    

    var tableDiv = document.getElementById("table");
    var tableContent = "<tr><th>Course</th><th>Unit</th><th>Grade</th></tr>";
    var col_len = myArr.length;
    var row_len = myArr[0].length;
 
    console.log(myArr)
    for (var i = 0; i < row_len; i++) {
        tableContent += "<tr>";
        for (var j = 0; j < col_len; j++) {
            if (j == 2) {
                tableContent += "<td>" + toGrade(myArr[j][i].toString()) + "</td>";
            } else {
                tableContent += "<td>" + myArr[j][i] + "</td>";
            }
        }
        tableContent += "</tr>";
    }
    tableDiv.innerHTML = tableContent;


     var new_un = un.map((i) => Number(i));
     var new_gd = gd.map((i) => Number(i));

     var sum_un = new_un.reduce(function(a, b){ return a + b;}, 0);

     var sum = 0;
     for (let i = 0; i < new_un.length; i++) {
          sum += new_un[i] * new_gd[i];
          
     }

     var total_sum = sum / sum_un
     
     var pval = 'YOUR GPA ::   ' + total_sum.toString();

     document.getElementById('pText').innerHTML = pval;

     var paste = document.getElementById('paste');
     // plb101	2	A chm112	2	B phy125	3	B zly106	2	C csc111	2	D

 
 



}