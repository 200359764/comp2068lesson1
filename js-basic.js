console.clear();

var dontUseTheseAnymore = true;
let useThisInstead = true;

const iseTheseAsMuchAsPossible = true;


try{
useTheseAsMuchAsPossible = false;
} catch (e) {
    console.log(e.toString());
}

let outsideBlock = "Look at me";
{
    console.log(outsideBlock);
    let insideBlock = "You can't see me";
}

try{
    console.log(insideBlock);
} catch (e) {
    console.error(e.toString());
}

if (true) {
    let name = "Seunghwan Kim";
}

try {
    console.log(name);
} catch (e) {
    console.error(e.toString());
}

const arr = [1, 3 ,5]
console.log(arr);

try {
    arr = "Seunghwan";
} catch (e) {
    console.error(e.toString());
}

arr[1] = 6;
console.log(arr);

const obj = {
    name: 'Seunghwan',
    age: '22',
    dob: '1997-12-26',
    'my name': 'Seunghwan Kim'
};

console.log(obj['name']);
console.log(obj.name);
console.log(obj['my name']);


let direction;
if (obj.age > 20) {
    direction = "down";
} else {
    direction = "up"
}
console.log("It's all " + direction + " hill from here");
console.log(`It's all ${direction} hill from here`);
console.log(`
Hello Seunghwan
How are you today.
`);

switch (direction) {
    case 'up':
        console.log("Goget em tiger");
        break;
        default:
            console.log("You better rest");
}


switch (true) {
    case 5 < 7:
        console.log("yep");
        break;
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let item of ['a', 'b', 'c']) {
    console.log(item);
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}


function sayHello (name) {
    console.log(`Hello, ${name}`);
}

sayHello('Seunghwan');
const helloFunc = sayHello;
console.log(helloFunc);
helloFunc('Kim');