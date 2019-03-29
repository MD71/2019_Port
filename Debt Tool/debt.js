var debt;

function add_debt() { 
    var x;
    let debt_label = document.getElementById("type_debt").value;
    // This is amount of debt in $. This also parses the number into a "number"
    let number = document.getElementById("debt_amount").value;
    x = parseInt(number);
    debt = debt_label + " " + x;
    //Adds another form to add addition debt
    var add_debt = '<li><input type="text" id="type_debt"> <input type="text" id="debt_amount"><input type="button" value="+" onclick="add_debt()"></li>';
    document.getElementById("your_debts").innerHTML += add_debt;
};