$(document).ready(function() {
  var size = $("#size").val();
  var toppings = $("#toppings").val();
  var crust = $("#crust").val();
  var no = parseInt($("#numbs").val());

  function order() {
    return size + ", " + toppings + ", " + crust;
  }

  $("button#submit").click(function() {
    alert(no);
    $("tbody")
      .last()
      .append(
        "<tr>" +
          "<td>" +
          order() +
          "</td>" +
          "<td>" +
          no +
          "</td>" +
          "<td>" +
          "Price" +
          "</td>" +
          "</tr>"
      );
      $(".toPay1").text(totalPrice);
      $(".toPay").text(totalPrice+200);
  });
      $("button#complete-order").click(function(){
          $(".delivery").show();
          $("button#complete-order").attr("disabled", true);
      });
      $("button#yes").click(function(){
          $(".delivery").hide();
          $(".location").show();
      });
      $("button#location-submit").click(function(){
          $(".location").hide();
          var location = $("input#yourLocation").val();
          $("p#text").text("Your pizza will be delivered to "+location + ".");
          $(".payment").show();
      });
      $("input#yourLocation").val("");
      $("button#no").click(function(){
          $(".delivery").hide();
          $(".noDelivery").show();
      });
});

  
