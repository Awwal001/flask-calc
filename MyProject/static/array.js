var myArr = [];

function toGrade(string) {
    switch(string) {
        case '5':
            return 'A';
        case '4':
            return 'B';
        case '3':
            return 'C';
        case '2':
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
     
     var pval = 'YOUR GPA ::   ' + total_sum.toFixed(2);

     document.getElementById('pText').innerHTML = pval;

    
     // plb101	2	A chm112	2	B phy125	3	B zly106	2	C csc111	2	D

    //  var paste = document.getElementById('paste').value;


// a = paste.split(/\s/);
// (15) ["plb101", "2", "A", "chm112", "2", "B", "phy125", "3", "B", "zly106", "2", "C", "csc111", "2", "D"]
// b = a.join(" ")
// "plb101 2 A chm112 2 B phy125 3 B zly106 2 C csc111 2 D"
// c = b.match(/\b\d\b/g)
// (5) ["2", "2", "3", "2", "2"]
// d = b.match(/\b[A-Za-z]\b/g)
// (5) ["A", "B", "B", "C", "D"]
// e = b.match(/\b\w+[0-9]\b/g)
// (5) ["plb101", "chm112", "phy125", "zly106", "csc111"]

// a.match(/[a-zA-Z]{3}\d{3}/g)

// var paste = document.getElementById('paste').value;
// a = paste.split(/\s/);
// b = a.join(" ")
// c = b.match(/\b\d\b/g)
// d = b.match(/\b[A-Za-z]\b/g)
// e = b.match(/\b\w+[0-9]\b/g)

}

function fillTable() {
    var paste = document.getElementById('paste').value;
    a = paste.split(/\s/);
    b = a.join(" ")

    var inputs =  b.match(/[a-zA-Z]{3}\d{3}/g);
    var loop = inputs.length - 5



    var html = '<tr>'+  
    '<td class="text-right">'+
    '<input type="text" name="c1" class="course">'+
  '</td>'+
  '<td>'+
    '<input type="number" name="u1" class="unit" min="1" >'+
  '</td>'+
  '<td class="text-left">'+
    '<select name="s1" class="grade">'+
      '<option value="&nbsp;"></option>'+
      '<option value="5">A</option>'+
      '<option value="4">B</option>'+
      '<option value="3">C</option>'+
      '<option value="2">D</option>'+
      '<option value="0">F</option>'+
   ' </select>'+
    '<input type="text" name="g1" '+
   ' style="display: none;">'+
  '</td>'+
  '</tr>'

    if (inputs.length > 5) {
        for (i = 0; i < loop; i++) {
            $('#main').append(html);
          }
    } else {
        
    }

    

    var inputFields = document.querySelectorAll('.course');
    inputFields.forEach((inputField, index) => {
        inputField.value = inputs[index];

    });
}



