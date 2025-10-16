const sayHello=require('./greetings')
const arithmetic=require('./math')

const message=sayHello('Developers')
console.log(message)

console.log(arithmetic.add(3,4));
console.log(arithmetic.sub(3,1));
console.log(arithmetic.mul(3,4));
console.log(arithmetic.div(3,1));
