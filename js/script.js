var sayMyName = function(name)
{alert("My name is: " + name)}

var car = {
    make: "VW",
    type: "Polo",
    color: "Blue",
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        "Seat 1",
        "Seat 2", 
        "Seat 3", 
        "Seat 4"
    ],
    turnOn: function()
    {
        this.isTurnedOn = true;
    },
    fly: function()
    {
        alert("fly");
    },

    switchCar: function(isOn)
    {
        console.log("Turn car "+ isOn);
        if (isOn== true)
        {
            this.isTurnedOn=true;
        }
        else{
            this.isTurnedOn=false;
        }
    }

}
console.log("Hello There!");