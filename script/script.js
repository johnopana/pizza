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
    periPeriChicken:26,
    barberque :21,
    sausage:18,
    chiCkenTikka:25,
    grilledRasher:20,
}
const crustPrices = {
    classicHandTossed:34,
    cheeseBurst:40,
    wheatThinCrust:50,
    freshPan:40,
    newHandTossed:40,
}
let totalCost, toppingCost,cheeseCost,getCost,grandCost;
const RN = num => { return Math.round(num * 100) / 100 }
const toggleClass = (item, c) => {
    item.classList.contains(c) ? item.classList.remove(c) : item.classList.add(c)
}
const camelize = str => {
    return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase()
    }).replace(/\s+/g, '')
  }