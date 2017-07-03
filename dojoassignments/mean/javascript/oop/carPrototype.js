function Car(make, model){
    var odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance){
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function(){
      return odometer;
    }
    
    // 'Setter' functions help us update private variables
    this.drive = function(distance){
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    }
}
var my_car_instance = new Car("Chevy", "Camero");
// by returning this, we can chain drive()
my_car_instance.drive(50).drive(90); 
// private variable is undefined
console.log(my_car_instance.odometer); // DON't WORK 
// but we can read it with our getter function
console.log(my_car_instance.readOdometer()); //WORKS
