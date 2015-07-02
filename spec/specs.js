describe('Pizza', function() {
  it("creates a new pizza with the given specifications ", function() {
    var testPizza = new Pizza("Debbie", "small");
    expect(testPizza.firstName).to.eql("Debbie");
    expect(testPizza.size).to.equal("small");
  });

    it("calculates the price of a pizza based on size", function() {
    var testPizza = new Pizza("Bobby", "large");
    expect(testPizza.firstName).to.equal("Bobby");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.price()).to.equal(10);
  });
 });
