/*
// Объявление переменной
// let userName = "John"
// const age = "18"

// Инициализация переменной
// userName = "John"
// Переприсваивание переменной
// Создание переменной
// userName = "John"


// console.log(userName)
// console.log(age)

// console.log("Hello World")
// console.log(18)

// number
console.log(5)
console.log(20)
console.log(5.2)
console.log(50000000000)

// string
console.log("Строка 1")
console.log('Строка 1')
console.log(`Строка 3`)

// undefined
console.log(undefined)

// boolean
console.log(true)
console.log(false)

// Динамическая типизация
let a = "Test"

// typeof Определение типа значений и переменных
console.log(typeof a)
console.log(typeof "Test")

a = 5

console.log(typeof a)
console.log(typeof 5)

a = true

console.log(typeof a)
console.log(typeof true)
*/
/*
// Математические операторы

// Сложение (сумма)
let num = 10 + 1
let num2 = num + 2
console.log(5 + 2)
console.log(num2)

let num = 2

num = num + 1
num += 5 + 1
console.log(num) // -> 3

// Разность (вычитание)
console.log(10 - 1 - 4 - 1 + 11)

// Умножение
console.log(4 * 5)

// Деление
console.log(10 / 2)
console.log(10.23 / 7)
console.log(7 / 0)

// Остаток от деления
console.log(9 % 2)
console.log(42 % 5)

// Возведение в степень
console.log(2 * 2 * 2)
console.log(2 ** 3)
console.log(0.1 + 0.2) // -> ?
*/
/*
// Декримент и Инкремент
let num = 2

console.log(num)

// Инкремент
num++
++num

// Декримент
num--
--num

console.log(num)
*/

// Приоритет операций
// let equqlity = (5 + 5) / 2
/*
// Преобразование типов
console.log(10 + 12) // -> 22
console.log(10 + "12") // -> 1012
console.log("10" + "12") // -> 1012
console.log(10 + true) // -> 11
console.log(undefined + undefined) // -> NaN (Not a Number)
*/

// String
// a = String(a)
// console.log(typeof a)

// Number
// console.log(Number("10"))
/*
// Boolean

// False - значения
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(false))
console.log(Boolean(undefined))
*/
/*
// Логические операторы (операторы сравнения)
console.log(5 > 0) // -> true
console.log(5 < 0) // -> false
console.log(5 >= 0) // -> true
console.log(5 <= 0) // -> false

// Нестрогое равенство
console.log(5 == 2) // -> false
console.log(5 == "5") // -> true

// Строгое равенство
console.log(5 === 2) // -> false
console.log(5 === "5") // -> false

// Нестрогое неравенство
console.log(5 != 2) // -> true
console.log(5 != "5") // -> false

// Строгое неравенство
console.log(5 !== 2) // -> true
console.log(5 !== "5") // -> false
*/
/*
// Условия

if (условие) {
    какой - то код
}

// Boolean 5
const age = 15
if (age >= 18) {
    console.log("Ok")
}
*/
/*
// Логические операторы

// Логическое ИЛИ (||)

if (условие1 || условие2) {

}

// Логическое И (&&)

// Комбинация
if (условие1 || условие2 && условие3) {

}

const age = 15
if (age >= 18) {
    console.log('Ok')
} else {
    console.log('Not Good')
}
*/
/*
// else if
if (age >= 18) {
    console.log('Ok')
} else if (age <= 18) {
    console.log('Ok 2')
} else if (age === 1) {
    console.log('What?')
}
*/

// switch
/*
switch (Значение) {
    case вариант_значения: {
        // какой-то код
        break;
    }
}
*/
/*
const key = 'LeftArrow'

switch (key) {
    case "UpArrow":
        {
            console.log("Была нажата стрелка вверх")
            break
        }
    case "DownArrow":
        {
            console.log("Была нажата стрелка вниз")
            break
        }
}
*/

// Циклы

// while

// while (условие) {
//     какой-то код
// }

// let i = 0

// while (i < 10) {
//     console.log(i)
//     i++
// }

// do while

// do {
//     // код
// } while (условие)

// let i = 5

// do {
//     console.log(i)
// } while (i < 0)

// for

// for (выражение1; выражение2; выражение3) {
//     // код
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (;; i++) {
//     console.log(i)
// }

// break и continue

// let i = 0;

// while (i < 10) {
//     if (i === 2) {
//         break
//     }
//     console.log(i)
//     i++
// }

// while (i < 10) {
//     if (i === 2) {
//         continue
//     }
//     console.log(i)
//     i++
// }