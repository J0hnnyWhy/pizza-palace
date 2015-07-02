function Pizza(firstName, size, toppings) {
	this.firstName = firstName;
	this.size = size;
	this.toppings = toppings;
	var order = []

	this.price = function() {
	    var totalPrice = 6;
	    if(this.size === "medium") {
	      totalPrice += 2;
	    } else if (this.size === "large"){
	      totalPrice += 4;
	    } else if (this.size === "XL"){
	      totalPrice += 8;
	    }

	    if (toppings.length > 0 && toppings.length < 4) {
	    	 var toppingPrice = (toppings.length * 2)
	    	totalPrice = totalPrice + toppingPrice
	    } else if (toppings.length >= 4) {
	    	toppingPrice = (toppings.length * 1.5)
	    	totalPrice = totalPrice + toppingPrice
	    }
	    order.push(totalPrice)
	    return totalPrice;	
	} 	
}
Pizza.prototype.finalPrice = function(quantity)  {
  return this.price() * quantity;
}

$(document).ready(function() {

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    toppings = new Array();
    var firstName = $("input#first-name").val();    
    var size = $('input[name="pizza-size"]:checked').val();
    $("input:checkbox[name=type]:checked").each(function() {
     toppings.push($(this).val());
    });
    var quantityPizza = parseInt($("input#how-many").val());
    var createdPizza =  new Pizza(firstName, size, toppings);
    var totalDue = createdPizza.finalPrice(quantityPizza);
    $(".first-name").text(createdPizza.firstName);
    $(".order").text(quantityPizza + " " + createdPizza.size + " with " + toppings);
    $(".price").text(totalDue);

     $('#configreset').click(function(){
     	 $('#new-pizza').find('input:text').val('');  
         $('input:checkbox').removeAttr('checked');
     });
  });
});