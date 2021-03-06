describe('Pizza', function() {
  it("creates a new pizza with the given specifications ", function() {
    var testPizza = new Pizza("Debbie", "small");
    expect(testPizza.firstName).to.eql("Debbie");
    expect(testPizza.size).to.equal("small");
  });

  it("calculates the price of a pizza based on size and toppings", function() {
    var testPizza = new Pizza("Bobby", "large", ["onions", "pb", "razorblade", "toothpick", "jellybean"]);
    expect(testPizza.firstName).to.equal("Bobby");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.price()).to.equal(17.5);
  });

  it("calculates the total price of all pizzas purchased", function() {
  	var testPizza = new Pizza("Bobby", "large", ["onions", "pb", "razorblade", "toothpick", "jellybean"]);
    expect(testPizza.price()).to.equal(17.5);
    expect(testPizza.finalPrice(2)).to.equal(35);
  })

});