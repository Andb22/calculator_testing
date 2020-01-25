var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers', function(){
    calculator.previousTotal = "1"
    calculator.add("4")
    assert.equal(5.0, calculator.runningTotal)
  })

  it('it can subtract two numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.strictEqual(3.0, calculator.runningTotal)
  })

  it('it can multiply two numbers', function(){
    calculator.previousTotal = "3"
    calculator.multiply("5")
    assert.strictEqual(15.0, calculator.runningTotal)
  })

  it('it can divide two numbers', function(){
    calculator.previousTotal = "21"
    calculator.divide("7")
    assert.strictEqual(3.0, calculator.runningTotal)
  })

  it('it can concatenate multiple numbers', function(){
    calculator.runningTotal = "3"
    calculator.newTotal = false
    calculator.numberClick("7")
    assert.strictEqual(37.0, calculator.runningTotal)
  })

  it('it can chain multiple operations', function(){
    calculator.previousTotal = "3"
    calculator.add("9")
    calculator.previousOperator = "+"
    calculator.operatorClick("+")
    assert.strictEqual(15.0, calculator.previousTotal)
  })


  it('it can clear the running total without affecting the calculation', function(){
    calculator.previousTotal = "10"
    calculator.runningTotal = "3"
    calculator.clearClick()
    calculator.add("15")
    assert.strictEqual(25.0, calculator.runningTotal)
  })
// what do you want to arrange, act, assert

});
