
// to create a object

let person = {};
// prop: value

person = {
    name: "John",
    age: 32,
    partTime: "Teacher",
    worksStatus: true
};
console.log(person);


let fn = function function1() {
    console.log("This function works!!");
};
fn();
console.log(showMessage("Jackson"));
function showMessage(thisMessage) {
    console.log(thisMessage);
}

function getValue(value) {
    let code = 42;
    return code * value;
}

console.log(getValue(55));