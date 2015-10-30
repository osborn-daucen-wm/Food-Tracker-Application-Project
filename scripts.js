//var q = new Date();
//var m = q.getMonth();
//var d = q.getDate();
//var y = q.getFullYear();
//var date = new Date(y,m,d);

function submitFunc(){
    var table = document.getElementById('foodTable');
    var foodH = document.getElementsByName('food')[0].value;
    var descriptionH = document.getElementsByName('desc')[0].value;
    var dateH = document.getElementsByName('date')[0].value;
    var expirationH = document.getElementsByName('expiration')[0].value;
    var clearOpt = "<button type='button' onclick='clearRow(this)'>Remove</button>";

    //Row
    var addRow = table.insertRow(1);

    //Cells
    var cell1 = addRow.insertCell(0);
    var cell2 = addRow.insertCell(1);
    var cell3 = addRow.insertCell(2);
    var cell4 = addRow.insertCell(3);
    var cell5 = addRow.insertCell(4);

    //
    cell1.innerHTML = foodH;
    cell2.innerHTML = descriptionH;
    cell3.innerHTML = dateH;
    cell4.innerHTML = expirationH;
    cell5.innerHTML = clearOpt;

    document.getElementById('foodForm').reset();

    var foodExp = Date.parse(expirationH);
    var today = new Date();
    var currentDate = Date.parse(today);

    if(currentDate > foodExp - 259200000) {
        addRow.style.backgroundColor = "#e56953";
    }


}

function clearRow(r) {
    var findRow = r.parentNode.parentNode.rowIndex;
    document.getElementById('foodTable').deleteRow(findRow);
}

