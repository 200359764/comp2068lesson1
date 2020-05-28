console.clear();

const arr = ['The Crow', 'The Cranberries', 'Cheesecake'];
const [movie, music, food] = arr;
console.log(movie, music, food);
console.log(`My favourite movie is ${movie}`);

const Seunghwan = {
    name: `Seunghwan Kim`,
    age: `22`,
    dob: (new Date(1997, 12, 26).toString())
};
console.log(Seunghwan);
const {name, age, dob} = Seunghwan;
console.log(`Your name is ${name} and you are ${age} years old. You were born on ${dob}.`);

const tim = {
    alias: 'Super Bob'
};
const { alias, aka = 'tim', race = 'unknown'} = tim;
console.log(alias, aka, race);

const {name: my_name, age: my_age, dob: my_dob} = Seunghwan;
console.log(my_name, my_age, my_dob);

const temps = [98, 67, 35];
const tempChanges = [...temps, 89, 65];
console.log(tempChanges);

const person = {name: "Seunghwan", spouse: "unknown", children: "none"};
const hobbies = {fav: "Listening music", secFav: "Food"};
const completePerson = {...person, hobbies: {...hobbies}};
console.log(completePerson);

function sayHello (name, age, dob) {
    console.log(`Hello, ${name}. You are ${age} years old. And ${dob}`);
}
const personArr = ['Seunghwan', 22, '12-26-1997'];
sayHello(...personArr);

function sayGoodbye ({name, age, dob}) {
    console.log(this);
console.log(`Goodbye ${name}. ${age} ${dob}`);
}

sayGoodbye(Seunghwan);

const myFirstArrowFunc = () => {
    console.log("I'm an arrow function");
};
myFirstArrowFunc();

const func2 = (param1, param2) => {
    console.log(param1, param2);
}
func2('arg1', 'arg2');

const func3 = param => {
    console.log(param);
};
func3('urgh');

const func4 = param => console.log(param);
func4("wowza");

//advanced javascript file