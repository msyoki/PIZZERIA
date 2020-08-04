function Pizza(size, toppings1,toppings2,toppings3,toppings4){
  this.size = size;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;
  this.toppings4 = toppings4;
};

Pizza.prototype.price = function(){
  var total = this.toppings1 + this.toppings2 + this.toppings3 + this.toppings4 + this.size;
  return total;
};


$(document).ready(function(){
  $("#pizzaOrder").submit(function(event){
    event.preventDefault();
    var size = parseFloat($("#size").val());
    var toppings1 = parseFloat($("#toppings1").val());
    var toppings2 = parseFloat($("#toppings2").val());
    var toppings3 = parseFloat($("#toppings3").val());
    var toppings4 = parseFloat($("#toppings4").val());

    var userPizza = new Pizza(size,toppings1,toppings2,toppings3,toppings4);
    
    $("#customerOrder").slideToggle(500);
    $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
    $("li").remove();
    $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
  });
});