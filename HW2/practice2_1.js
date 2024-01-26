function backwards(name) {
    return name.split('').reverse().join('');
}
console.log(backwards("Vovan")); 

function polindrom(str){
    if(str === str.split('').reverse().join('')){
        console.log("Polindrome confirmed");
    } else{
        console.log("This is not polidrome");
    }
}
polindrom("MishahsiM"); 
polindrom("Yura");

function getPaired(array) {
    pairedArray = array.filter(number => number % 2 === 0);
    return pairedArray.reverse();
}
console.log(getPaired([1,2,3,4,5,,6,11,14,16,25]))