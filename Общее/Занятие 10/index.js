// Объявление переменной
// let userName
// const age

// Инициализация переменной
// userName = "John"
// Переприсваивание переменной
// userName = "Jonas"

// Создание переменной
// let userName = "John"
// const age = 18

// userName = "Jonas"

// console.log(userName)
// console.log(age)

// console.log("Hello World", "Hello World 2", 5, true)

// Типы данных

// number
// console.log(5)
// console.log(5.2)
// console.log(-100)
// console.log(0.000001)

// string
// console.log("Строка 1")
// console.log('Строка 2')
// console.log(`Строка 3`)

// undefined
// console.log(undefined)

// boolean
// console.log(true)
// console.log(false)

// Динамическая типизация
// let a = "Test"

// typeof - определение типа значения или переменной
// console.log(typeof a)
// console.log(typeof "Test")

// a = 5

// console.log(typeof a)
// console.log(typeof 5)

// a = true

// console.log(typeof a)
// console.log(typeof true)

// let a = 10
// let b = a

// console.log(a)
// console.log(b)

/*
    Создайте файл с расширением .js и подключите его к вашей HTML странице.
    Дальше создайте переменную с именем num и сохранить в неё значение 123.
    Вывести значение переменной num в коносоль.
*/

/*
    Создайте переменную userName со значением "John". Затем присвойте ей новое значение "Tom" и выведите переменную userName в консоль.
*/

// Математические операторы

// Сложение (сумма)
// let num = 10 + 1.5 + 2 + 7
// let num2 = num + 2

// let num = 2

// num = num + 5 + 1
// num += 5 + 1

// console.log(num) // -> 3

// console.log(5 + 2)
// console.log(num2)

// Разность (вычитание)
// console.log(10 - 1 - 2 + 1)

// let num = 2
// num -= 1

// Умножение
// console.log(4 * 5)
// console.log(1.5 * 2)

// let num = 2
// num *= 1

// Деление
// console.log(10 / 5)
// console.log(10.23 / 10)
// console.log(-10 / 0)

// let num = 2
// num /= 1

// Остаток от деления
// console.log(9 % 2)
// console.log(42 % 5)

// Возведение в степень
// console.log(2 * 2 * 2)
// console.log(2 ** 3)

// console.log(0.1 + 0.2) // -> ?

// Декримент и инкремент
// let num = 2

// console.log(num) // -> 2
// console.log(num++) // -> 2

// console.log(num) // -> 2
// console.log(++num) // -> 3

// Инкремент
// num++
// ++num

// Декремент
// num--
// --num

// console.log(num)

// Приоритет операций
// let equality = (5 + 5) / 2

// Преобразование типов
// console.log(10 + 12) // -> 22
// console.log(10 + "12" + 10) // -> 1012
// console.log("10" + "12") // -> 1012
// console.log(10 + true) // -> 11
// console.log(10 + false) // -> 10
// console.log(10 + undefined)
// console.log(undefined + undefined) // -> NaN (Not a Number)

// console.log("10" + true)
// console.log("10" + false)

// console.log("Hello " + "World")

// let a = 5

// console.log(typeof a)

// String
// a = String(a)

// console.log(typeof a)

// Number
// console.log(typeof Number("10"))
// console.log(Number("hello"))

// Boolean

// Falsy-значения
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(false))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

/*
    "" + 1 + 0 = 10
    "" - 1 + 0 = -1
    true + false = 1
    6 / "3" = 2
    "2" * "3" = 6
    4 + 5 + "px" = 9px
    "$" + 4 + 5 = $45
    "4" - 2 = 2
    "  -9  " + 5 = -9 5
    "  -9  " - 5 = -14
    null + 1 = 1
    undefined + 1 = NaN
*/