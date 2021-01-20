
$(document).ready(function() {
    $('#scroll').hide();
})    

$(document).ready(function() {
    $('#summary').hide();
})

$(document).ready(function() {
  $('#complete').show();
})

$(document).ready(function() {
  var deliveryPrice = 0;
  $('#checkout').click(function() {
      var checkValue = document.getElementById('delivery').value;
      if (checkValue === '400') {
        deliveryPrice += 400;
        var location = prompt('Enter delivery location:');
        alert('Delivery Price is Ksh' + deliveryPrice)
        alert('Pizza will be delivered at' + ' ' + location);
      }     
  });

  $('form#pizza').submit(function(event) {
    var pizzaSize = parseFloat(document.getElementById('size').value);
    var pizzaCrust = parseFloat(document.getElementById('crust').value);
    var pizzaTopping = parseFloat(document.getElementById('toppings').value);
    var pizzaQuantity = parseFloat(document.getElementById('number').value);
    var pizzaDelivery = parseFloat(document.getElementById('delivery').value);
    var total = (pizzaSize + pizzaCrust + pizzaTopping + pizzaDelivery)*pizzaQuantity;
    
    document.getElementById('displayTotal').innerHTML = total 
    console.log(total);

    document.getElementById('seeYourSizeChoice').innerHTML ="Kshs "+ pizzaSize;
    document.getElementById('seeYourCrustChoice').innerHTML ="Kshs "+pizzaCrust;
    document.getElementById('seeYourToppingsChoice').innerHTML = "Kshs "+ pizzaTopping;
    document.getElementById('seeQuantity').innerHTML = "x "+ pizzaQuantity;
    if (pizzaDelivery > 0 ){
      document.getElementById('seeYourDeliveryChoice').innerHTML ="Kshs "+ pizzaDelivery;
    }else{
      document.getElementById('deliverystatus').style.display = "none";
    }
    $('#complete').hide();
    $('#summary').show();
    $('#scroll').show();

    event.preventDefault();
  });
})