"use strict";
const Ferry = require('../ferry');
const Car = require("../car");
const assert = require('assert');

describe('Car function', function() {
    it("Should be able to get the car color", function() {
        let blueCar = new Car("blue", "CY 2345", 5)
        assert.equal('blue', blueCar.carColor);
    });

    it('Should keep track of passangerNum in a car', function() {
        let redCar = new Car("red", "CJ 347", 4);
        assert.equal(4, redCar.passangerNum);
    });

    it("should check the regNumber of a car", function() {
        let greenCar = new Car("green", "CA 566", 6);
        assert.equal("CA 566", greenCar.regNumber);
    });
});


describe("board function", function() {
    it("should accept cars boarding the ferry", function() {
        let ferry101 = new Ferry(3, 5);
        let orangeCar = new Car("orange", "CL234", 4);
        assert.equal("accepted", ferry101.board(orangeCar));
    });
    it("should reject the cars boarding the ferry", function() {
        let ferry101 = new Ferry(3, 5);
        let purpleCar = new Car("purple", "CA 234", 13);
        let greenCar = new Car("green", "CY 566", 6);
        let redCar = new Car("red", "CJ 347", 4);
        let blueCar = new Car("blue", "CY 2345", 7);
        let orangeCar = new Car("orange", "CL 234", 4);
        ferry101.board(purpleCar);
        ferry101.board(greenCar);
        ferry101.board(redCar);
        ferry101.board(orangeCar);
        assert.equal("rejected", ferry101.board(blueCar));
    });
    it("should accept people on the ferry", function() {

        let ferry101 = new Ferry(4, 5);

        let redCar = new Car("red", "CY 1245", 4);
        // console.log(ferry101.car_count());

        assert.equal(4, redCar.passangerNum);
        assert.equal('accepted', ferry101.board(redCar));
    });

    it('Should reject people on the ferry', function() {
        let ferry101 = new Ferry(3, 5);

        let pinkCar = new Car("pink", "CA 579", 7);
        // console.log(ferry101.people_count());

        assert.equal(7, pinkCar.passangerNum);
        assert.equal("rejected", ferry101.board(pinkCar));
    });
    it("should get the color of cars on the ferry", function() {
        let ferry101 = new Ferry(3, 5);
        let purpleCar = new Car("blue", "CA 234", 13);
        let greenCar = new Car("green", "CY 566", 6);
        let redCar = new Car("red", "CJ 347", 4)
        let blueCar = new Car("blue", "CY 2345", 7)
        let orangeCar = new Car("orange", "CL 234", 4)
        ferry101.board(purpleCar);
        ferry101.board(greenCar);
        ferry101.board(redCar);
        ferry101.board(orangeCar);
        ferry101.board(blueCar);
        ferry101.board(blueCar);
        assert.equal(3, ferry101.color('blue'));
    });

    it ("should update the number of cars when a car leave the ferry", function(){
      let ferry101 = new Ferry(3, 5);
      let purpleCar = new Car("blue", "CA 234", 13);
      let greenCar = new Car("green", "CY 566", 6);
      let redCar = new Car("red", "CJ 347", 4)
      let blueCar = new Car("blue", "CY 2345", 7)
      let orangeCar = new Car("orange", "CL 234", 4)
      ferry101.board(purpleCar);
      ferry101.board(greenCar);
      ferry101.board(redCar);
      ferry101.board(orangeCar);
      ferry101.board(blueCar);
      ferry101.board(blueCar);
      assert.equal(5,ferry101.unboard(blueCar));
    })
    it('should update the passangers when a car leaves a ferry', function() {
      let ferry101 = new Ferry(3, 5);
      let purpleCar = new Car("blue", "CA 234", 13);
      let greenCar = new Car("green", "CY 566", 6);
      let redCar = new Car("red", "CJ 347", 4)
      let blueCar = new Car("blue", "CY 2345", 7)
      let orangeCar = new Car("orange", "CL 234", 4)
      ferry101.board(purpleCar);
      ferry101.board(greenCar);
      ferry101.board(redCar);
      ferry101.board(orangeCar);
      ferry101.board(blueCar);
      ferry101.board(blueCar);
      assert.equal(4, ferry101.people_count())
    })
    it('should give 50% discount to the car boarding the same ferry for the forth time', function(){
      let ferry101 = new Ferry(10, 15);
      let purpleCar = new Car("blue", "CA 234", 13);
      let greenCar = new Car("green", "CY 566", 6);
      let blueCar = new Car("blue", "CY 2345", 7)
      let orangeCar = new Car("orange", "CL 234", 4)
      ferry101.board(purpleCar);
      ferry101.board(greenCar);
      ferry101.board(blueCar);
      ferry101.board(orangeCar);
      ferry101.board(blueCar);
      ferry101.board(blueCar);
      assert.equal("Half price", ferry101.board(blueCar))
    })
      // it ("should give a free trip after the 7th trip on the ferry", function(){
      //   let ferry101 = new Ferry(5, 15);
      //   let orangeCar = new Car("orange", "CL 234", 4);
      //   ferry101.board(orangeCar);
      //   ferry101.board(orangeCar);
      //   ferry101.board(orangeCar);
      //   ferry101.board(orangeCar);
      //   ferry101.board(orangeCar);
      //   ferry101.board(orangeCar);
      //   ferry101.board(orangeCar);
      //   assert.equal('CL 234', orangeCar.regNumber);
      //   assert.equal("You Go Free", ferry101.board(orangeCar))
      // })
});
