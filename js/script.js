let pizza = function(size, toppings, crust) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
};

$(document).ready(function() {
  $("button#sub").click(function(event) {
    var psize = parseInt($("#size").val());
    var ptoppings = parseInt($("#toppings").val());
    var pcrust = parseInt($("#crust").val());
    // var no = parseInt($("#numbs").val());

    pizza.prototype.total = function() {
      return this.size + this.toppings + this.crust;
    };
    var nPizza = new pizza(psize, ptoppings, pcrust);
    var rtotal = nPizza.total();

    $("tbody")
      .last()
      .append(
        "<tr>" +
          "<td>" +
          psize +
          "</td>" +
          "<td>" +
          "" +
          "</td>" +
          "<td>" +
          "Price" +
          "</td>" +
          "</tr>"
      );
  });
  $("button#complete-order").click(function() {
    $(".delivery").show();
  });
  $("button#yes").click(function() {
    $(".delivery").hide();
    $(".location").show();
  });

  $("button#location-submit").click(function() {
    $(".location").hide();
    var location = $("input#yourLocation").val();

    $("#text").text("Your pizza will be delivered to " + location + ".");
    $(".payment").show();
  });
  $("input#yourLocation").val("");
  $("button#no").click(function() {
    $(".delivery").hide();
    $(".noDelivery").show();
  });
});
