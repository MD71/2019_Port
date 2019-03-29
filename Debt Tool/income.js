//Universal Variables :
//==========================
var net;
var yearly_income;
//==========================
//Universal Functions here 
//==========================
// Shows question for "What is your income?":
function ask_income_weekly() {
    document.getElementById("your_income_weekly").style.display = "block";
};
function ask_income_biweekly() {
    document.getElementById("your_income_biweekly").style.display = "block";
};
//=========================
// Grabs input for net, turns it into number then multiplies it by 26 or 52//
//Also displays Next part of (Do you have Debt?)//
function grab_net_weekly() {
 let number = document.getElementById("net_amount").value;
 net = parseInt(number);
    yearly_income = net * 52;
    document.getElementById("debt").style.display = "block";
};
function grab_net_biweekly() {
    let number = document.getElementById("net_amount_bi").value;
    net = parseInt(number);
    yearly_income = net * 26 ;
    document.getElementById("debt").style.display = "block";

};
//==========================
//Weekly & Bi-Weekly Functions:
//==========================
function weekly() {
    ask_income_weekly()
    document.getElementById("income_type").style.display = "none";
};
function bi_weekly() {
    ask_income_biweekly() 
    document.getElementById("income_type").style.display = "none";
};
//==========================

