obj1 = {};
obj2 = {};
obj3 = {};

obj4 = new Object();
obj5 = new Object();
obj6 = new Object();

baseObj = { 
 property1: 'Value1',
 property2: 'Value2'
};
newObj = Object.create(baseObj);

engineer = {
    name: 'Dima',
    role: 'Engineer',
};
  
QA_engineer = Object.create(engineer);
QA_engineer.role = 'QA Engineer';
QA_engineer.bugsReported = 5;

person = {
    name: 'Alice',
    age: 30,
};  
Object.setPrototypeOf(engineer, person);

console.log('Engineer:', engineer);
console.log('QA Engineer:', QA_engineer);
console.log('Person:', person);
