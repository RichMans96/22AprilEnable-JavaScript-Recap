var variable1 = 0;
let variable2 = 'string';
const variable3 = true;
let array1 = ['pizza'];
let numArray = [1, 2, 3, 4, 5];
let object1 = {
  firstName: 'Jeff',
  lastName: 'Bezos',
};

//Destructuring
const [num1, num2, num3, num4, num5] = numArray;
const [n1, , n3, , n5] = numArray;
console.log(num1);
console.log(n5);
const { firstName, lastName } = object1;
console.log(firstName);

console.log(variable2);
console.log(variable3);

// variable3 = false;

function func1() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  for (let i in array1) {
    console.log('For in ' + array1[i]);
  }

  array1.forEach((string) => {
    console.log(`foreach ${string}`);
  });

  for (let i in object1) {
    console.log(object1[i]);
  }
}

const func2 = (param1) => {
  param1 == true ? console.log('hello') : console.log('bye');
  if (param1 == true) console.log('hi');
};

array1.push('hot dog');

console.log(array1);

console.log(numArray.map((num) => num * 2));
console.log(numArray.filter((num) => num > 2));
console.log(numArray.reduce((prev, current) => prev * current));

function closures() {
  let var1 = "I'm a var";

  function innerFunc() {
    console.log(var1);
  }

  innerFunc();
}

const func3 = (param1) => {
  console.log(var1);
};

func1();
func2(false);
closures();
func3();
