//create interface
interface Drivable{
    start();
    drive();
    getPosition();
}
//create class for imlementing the interface

class Car implements Drivable{
    start(){
        return 'Start driving the car....';
    }
    drive(){
        return 'Drive slowly and be careful while driving...';
    }
    getPosition(){
        return 'Get the proper position...';
    }
}
var vehicle=new Car();
console.log(vehicle.start());
console.log(vehicle.drive());
console.log(vehicle.getPosition());

