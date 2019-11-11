function calc(){
var capsicum =document.getElementById("img1") .value;
var periChiken =document.getElementById("img2") .value;
var barbeque =document.getElementById("img3") .value;
var sausage =document.getElementById("img4") .value;
var chickenTikka=document.getElementById("img5") .value;
var chickenRasher=document.getElementById("img6") .value;
var total= ("img1"+"img2"+"img3"+"img4"+"img5"+"img6");
document.getElementById("total").value="total";
}
let selectedToppings = []
const totalCostBox = document.getElementById('total-cost')
const toppingsCostBox = document.getElementById('toppings-cost')
const cheeseCostBox = document.getElementById('cheese-cost')
const gstCostBox = document.getElementById('gst-cost')
const grandCostBox = document.getElementById('grand-cost')
const quantity = document.getElementById('quantity')
const toppingDivs = document.querySelectorAll('.topping')
const crustDivs = document.querySelectorAll('.crust')

