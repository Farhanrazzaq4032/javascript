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


const arr = [{name : "farhan"}, "usman", "atif"];

for (let value of arr){
    console.log(value);
}

for (const i in car) {
    console.log([i]);
}

// Arrow Function with Expression

let userName = "fahran";
let userLength = userName.length;
console.log(userLength);

let checkName = (userLength < 10) ?
() => console.log("name is less then 10"):
() => console.log("name is grether then 10");

checkName();


