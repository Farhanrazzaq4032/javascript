//Practices Man Profect


// Function Recursion

function countNbr (num) {
    console.log(num);

    const newNum = num - 1;

    if(num > 0){
        countNbr(newNum);
    }

}

countNbr(5);

//pracitices Object in javaScript

const car = {

    model : "kia",
    color : "green",
    speed : 320,
    drive : function (){
        console.log("Car Details:" + this.model + "" + this.color + "" + this.speed); 
    },
    feature : {
        model : 2023,
        mode : "auto Driver",
        head_light : "White"
    }

}

//Accessing value of object
console.log(car);
console.log(car.feature);
console.log(car.feature.model);

//Make any object to Assign Value


const person = {}

person.name = "Farhan";
person.age = 24;

console.log(person.name + person.age);


// Constructor in JavaScirpt

function cars() {
    this.name = "Kia",
    this.model = 2024,
    this.speed = 400
}

let carObj = new cars();
console.log(carObj.speed);



