// Arrow function tutorial

var names = ['Andrew', 'Julie', 'Jen'];

/*
names.forEach(function(name, index) {
  console.log('forEach', name, index);
});

names.forEach((name, index) => {
  console.log('arrowFunc', name, index);
});

names.forEach((name, index) => console.log('simple command', name, index));

var returnMe = (name) => name + '!';
console.log(returnMe('Bob'));
*/

/*var person = {
  name: 'Rob',
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + ', say hi to ' + name);
    });
  }
}

person.greet();

var anotherPerson = {
  name: 'Rob',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ', say hi to ' + name);
    });
  }
}

anotherPerson.greet();*/


// Challenge area

// Add statement

var addStatement = (a, b) => {
  console.log('Add statement: ', a + b);
}

addStatement(1, 2);
addStatement(2, 2);
addStatement(0, 0);

// Add expression
var addExpression = (a, b) => console.log('Add expression: ', a + b);


addExpression(3, 2);
addExpression(4, 2);
addExpression(5, 0);