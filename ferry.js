var car_count = 0;
var people_count = 0;
var color = {};
var regNum = {}
module.exports = function Ferry(carNumber, passangers) {

    this.board = function(car) {


        if (regNum[car.regNumber] >= 7) {
          return "You Go Free";
        } else if(regNum[car.regNumber] === 4) {
          return "Half price";
        }

        if (regNum[car.regNumber] === undefined) {
            regNum[car.regNumber] = 0
        } else {
            regNum[car.regNumber] += 1
        }

        if (color[car.carColor] === undefined) {
            color[car.carColor] = 0
        } else {
            color[car.carColor] += 1
        }

        if (car_count <= carNumber && people_count <= passangers) {
            car_count++
            people_count++
            return "accepted"
        } else {
            return "rejected"
        }
    }

    this.car_count = function() {
        return car_count
    }

    this.people_count = function() {
        return people_count
    }

    this.color = function(totalColors) {
        return color[totalColors];
    }
    this.unboard = function(car) {
        car_count--
        people_count--
        color[car.carColor]--
            return color[car.carColor];
    }
}
