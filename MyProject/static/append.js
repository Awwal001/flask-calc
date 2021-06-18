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

$(function() {
$('#main').sortable();

$('#addRow').click(function(){
$('#main').append(html);
});


});

