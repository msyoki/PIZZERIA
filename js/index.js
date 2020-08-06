function Pizza(size, crust,topping,total){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
};
Pizza.prototype.order =function () {
  return ("You have ordered " + this.size + "with " + this.crust + "crusting" + "and " + this.toppings + "topping");
}
function TotalPrice (price, quantity, delivery,toppings,crust) {
  this.price= price;
  this.size=quantity;
  this.delivery=delivery;
  this.toppings=toppings;
  this.crust=crust;
  };
  TotalPrice.prototype.finalTotal = function () {
  return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
  }; 
  
  var sizeName = ["small","medium","large"]
  var sizePrice = [350,500,1000];
  var crustPrice = [150,200,180];
  var toppPrice = [200,300,180,200,180];   

  var userSize = $("#size option:selected").val();
  var userCrusting = parseInt($("input#crust").val());
  var userTopping = parseInt($("input#toppings").val());
  var userFlavour = $("input#flavour").val();
  var userDelivery = $("input#location").val();
  var userNumber = parseInt($("input#quantity").val());

  var realSize = sizePrice[userSize];
  var realCrusting =crustingPrice[userCrusting];
  var realTopping = toppingPrice[userTopping];
  var realName = sizeName[userSize];

  order = new Pizza(userSize,userCrust,userTopping,userNumber);
  newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);

  $("#btn1").click(function(){
    if(userDelivery === " "){
      DeliveryCost = 0
      newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
      $("ol#list").append(newTotal.finalTotal())
    }
  })
  
     //$("p").append("<b>Appended text</b>");





