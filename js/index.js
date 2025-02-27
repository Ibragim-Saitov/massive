//1

let a = ['lorem', 123, true, 'ipsum']

console.log(a.length);

//2

let firstElement = a[0];
let lastElement = a[a.length - 1];

console.log(firstElement);
console.log(lastElement)

//3

let em = []

em.push('IPhone')
em.push('Redmi')
em.push('Samsung')
em.push('Nokia')
em.push('LG')


console.log(em)

//4

em.unshift('Lenovo')
em.unshift('Android')
em.unshift('Huawei')

//5

em.splice(0,1)
em.splice(5,6)

//6

let number = [1, 3, 5, 7, 9]

let evenNumbers = number.map(num => num + 1);

console.log(evenNumbers)
