//create class for imlementing the interface
var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        return 'Start driving the car....';
    };
    Car.prototype.drive = function () {
        return 'Drive slowly and be careful while driving...';
    };
    Car.prototype.getPosition = function () {
        return 'Get the proper position...';
    };
    return Car;
}());
var vehicle = new Car();
console.log(vehicle.start());
console.log(vehicle.drive());
console.log(vehicle.getPosition());
