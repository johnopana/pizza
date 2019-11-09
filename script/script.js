const totalCostBox = document.getElementById('total-cost')
const toppingsCostBox = document.getElementById('toppings-cost')
const cheeseCostBox = document.getElementById('cheese-cost')
const gstCostBox = document.getElementById('gst-cost')
const grandCostBox = document.getElementById('grand-cost')
const quantity = document.getElementById('quantity')
const toppingDivs = document.querySelectorAll('.topping')
const crustDivs = document.querySelectorAll('.crust')
const toppingPrices = {
    capsicum :15,
    periperichicken:26,
    barberque :21,
    sausage:18,
    chickentikka:25,
    grilledrasher:20,
}
const crustPrices = {
    classicHandTossed:34,
    cheeseBurst:40,
    wheatThinCrust:50,
    freshPan:40,
    newHandTossed:40,
}