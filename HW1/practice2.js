 function canSmoke1(age){
    if (age >= 18) { 
        console.log("You are eligible to smoke") 
    } else { 
        console.log("You are not eligible to smoke") 
    }
}
canSmoke1(25);
canSmoke1(16);

const canSmoke2 = function(age){
    if (age >= 18) { 
        console.log("You are eligible to smoke") 
    } else { 
        console.log("You are not eligible to smoke") 
    }
}
canSmoke2(78);
canSmoke1(1);

const canSmoke3 = (age) => {
    if (age >= 18) {
        console.log("You are eligible to smoke");
    } else {
        console.log("You are not eligible to smoke");
    }
};
canSmoke3(21);
canSmoke3(7);

function  allowedTOIn(name, age, department){
    if(name ==="Misha" && age>35 && department === "CEO" ){
    console.log("Access allowed");
        return true;
    } else {
        console.log("Access denied");
        return false;
    }
}
allowedTOIn("Misha",45,"CEO");
allowedTOIn("Denis",21,"qa");