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
  });
});
