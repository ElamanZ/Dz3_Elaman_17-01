// HW:
// 1.1
let checkAge = function (age) {
    return (age > 18) ? "true" : "Родители разрешили";
}
console.log(checkAge(15))

// 1.2
let a = 1
let b = 2
let result = (a + b < 4) ? () => console.log('Мало') : () => console.log('Много')
console.log(result())

// 1.3
let login = prompt ("Введите логин:")
let massage = (login === 'Сотрудник') ? () => alert ('Привет') : (login === 'Директор') ? () => alert ('Здравсвтуйте') : () => alert('Нет логина')
console.log(massage())

// 2.1
let a;
if (a > 0) {
    let ggg = function() {
        console.log('!')
    }
} else {
    let ggg = function() {
        console.log('!!')
    }
}
console.log(a)

// 2.2
function test () {
    var elements = ['Hydrogen','Helium','Lithium','Beryllium']
    return elements
}
console.log(test())
console.log(test().length)

// 2.3 Первый вариант решения
const test = () => ['Hydrogen','Helium','Lithium','Beryllium']
console.log(test())

// 2.3 Второй вариант решения
const test = () => {
    var elements = ['Hydrogen','Helium','Lithium','Beryllium']
    return elements
}
console.log(test())
console.log(test().length)