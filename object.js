  var enterprise = {
  name: "enterprise",
  type1: "economy",
  ecarsAvaliable: 90,
  type2: "midsize",
  mcarsAvaliable: 180,
  carsrented: 170,
  ecarprice: 200,
  midcarprice: 300, 
  
    }
    
var price = {
    ecar: 200,
  midcar: 300, 
}

var newcar = {
    car1: "economy", 
    car2: "midsize",
}
  


function infoFunction() {
    document.getElementById("name").innerHTML = enterprise.name;
     document.getElementById("type1").innerHTML = enterprise.type1;
     document.getElementById("mcarsAvaliable").innerHTML = enterprise.mcarsAvaliable;
     document.getElementById("type2").innerHTML = enterprise.type2;
     document.getElementById("ecarsAvaliable").innerHTML = enterprise.ecarsAvaliable;

}

function getEco() {
     document.getElementById("ecarsAvaliable").innerHTML = enterprise.ecarsAvaliable--;
}

function getmid() {
     document.getElementById("mcarsAvaliable").innerHTML = enterprise.mcarsAvaliable--;
}

function fillform() {
    document.getElementById("ecarprice").innerHTML = enterprise.ecarprice;
     document.getElementById("midcarprise").innerHTML = enterprise.midcarprice;
    
}
 
function getprice() {
  var pickcar =  document.getElementById("dropdown").value;
    
    if (pickcar === "economy") {
        document.getElementById("test").innerHTML="200 and 400";
    } else if (pickcar === "midsize") {
        document.getElementById("test").innerHTML="300 and 250";
        price = "300";
        
     document.getElementById("confirmnation").innerHTML = "Confirmed";
    }
    
    
    // document.getElementById("price").innerHTML = price.ecarprice;
    //document.getElementById("price").innerHTML = price.midcarprice;
}
        
        
        
    