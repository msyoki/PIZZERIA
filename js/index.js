
$(document).ready(function() {
    $('#scroll').hide();
})    

$(document).ready(function() {
    $('#summary').hide();
})
$(document).ready(function() {
  var deliveryPrice = 0;
  $('#checkout').click(function() {
      var checkValue = document.getElementById('delivery').value;
      if (checkValue === '400') {
          deliveryPrice += 400;
          var location = prompt('Enter delivery location:');
          var contact = prompt('Enter contact number:');
          alert('Delivery Price is Ksh' + deliveryPrice)
          alert('Pizza will be delivered at' + ' ' + location);
          alert('Contact number:' + ' ' + contact);
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

    document.getElementById('seeYourSizeChoice').innerHTML = pizzaSize;
    document.getElementById('seeYourCrustChoice').innerHTML = pizzaCrust;
    document.getElementById('seeYourToppingsChoice').innerHTML = pizzaTopping;
    document.getElementById('seeYourDeliveryChoice').innerHTML = pizzaDelivery;
    
    $('#summary').show();
    $('#scroll').show();

    event.preventDefault();
  });
})