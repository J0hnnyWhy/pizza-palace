describe('Pizza', function() {
  it("creates a new pizza with the given specifications ", function() {
    var testPizza = new Pizza("Debbie", "small");
    expect(testPizza.firstName).to.eql("Debbie");
    expect(testPizza.size).to.equal("small");
  });
 });
