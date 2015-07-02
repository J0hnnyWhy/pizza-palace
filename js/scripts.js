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