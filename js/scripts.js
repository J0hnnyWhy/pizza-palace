function Pizza(firstName, size, toppings) {
	this.firstName = firstName;
	this.size = size;
	this.toppings = toppings;

	this.price = function() {
	    var totalPrice = 6;
	    if(this.size === "medium") {
	      totalPrice += 2;
	    } else if (this.size === "large"){
	      totalPrice += 4;
	    } else if (this.size === "XL"){
	      totalPrice += 8;
	    }
	    return totalPrice;
	} 

}
 