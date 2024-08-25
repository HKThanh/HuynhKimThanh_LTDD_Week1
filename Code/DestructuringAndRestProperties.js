// Destructuring assignment
// Destructuring Assignment là một cú pháp cho phép tách dữ liệu được lưu trữ bên trong (nested) Objects hoặc Arrays (tổng quát hơn là các iterable values) và gán chúng cho các biến riêng biệt.

// Ex:
// Destructuring assignment from object
// const obj = { first: 'Jane', last: 'Doe' };
// const {first, last} = obj;
// console.log(first); // Jane

// Explain: Destructuring assignment from object
// Tạo một object obj với 2 properties là first và last.
// Sử dụng destructuring assignment để gán giá trị của obj.first cho first và obj.last cho last. 2 biến được gán phải có cùng tên với properties trong object cho trước.
// Destructuring assignment from array
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(x); // 1
// Explain: Destructuring assignment from array
// Tạo một array arr với 3 phần tử.
// Sử dụng destructuring assignment để gán giá trị của arr[0] cho x và arr[1] cho y.

// Destructuring assignment from nested object
const obj1 = {
    person1: {
        name: 'Jane',
        age: 22
    }
};
const {person1: {name, age}} = obj1;
console.log(name); //
// Explain: Destructuring assignment from nested object
// Tạo một object obj với một property là person, và person chứa 2 properties là name và age.
// Sử dụng destructuring assignment để gán giá trị của obj.person.name cho name và obj.person.age cho age.
// Lưu ý: Để truy cập vào các nested properties, ta cần sử dụng cú pháp có dạng {nestedObject: {nestedProperty}}: nestedObject phải giống với nestedObject đã cho trước.
// person1 có phải là 1 object không? Nếu không, giải thích?
// Không, person1 không phải là 1 object. person1 chỉ là tên của biến mà chúng ta muốn gán giá trị của obj.person cho nó.


//Destructuring parameters
// Destructuring parameters là một cú pháp cho phép chúng ta truy cập các giá trị được truyền vào một hàm thông qua destructuring assignment.

//Ex:
// Destructuring parameters in function
function printName({ages}) {
    console.log(" is " + ages + " years old");
}

const obj2 = {name: 'Jane', age: 22};
printName(obj2); // undefined because we are trying to access ages property which is not present in obj2

function printNameAndAge({name, age}) {
    console.log(name + " is " + age + " years old");
}
// printNameAndAge(obj2); // Jane is 22 years old

// Rest properties
// Rest properties cho phép chúng ta lấy các phần tử còn lại của một iterable value (array hoặc object) và gán chúng vào một biến.

//Ex:
// Rest properties in array
const arr1 = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr1;
console.log(a); // 1

// Rest properties in object
const obj3 = {first: 'Jane', last: 'Doe', age: 22};
const {first, ...rest1} = obj3;
console.log(first); // Jane