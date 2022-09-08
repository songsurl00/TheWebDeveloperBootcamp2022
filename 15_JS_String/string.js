let username = "sugeun" // 따옴표로 감싸서 문자열 표현

// '' , "" 중 하나로 일관성 있게 표현

// 문자열 method들
let example = "leave me alone"
example.toUpperCase()  // 'LEAVE ME ALONE' 

let userInput = "       hello my name is Song Sugeun";
userInput.trim();   // 'hello my name is Song Sugeun'

// method 여러개를 한 줄에 쓸 수도 있음
let greeting = "      hello!!     ";
greeting.trim().toUpperCase()   // 'HELLO!!'

// 인수를 요구하는 method들
let msg = "haha that is so funny!";
msg.yindexOf('h');   // 0
msg.indexOf('!');  // 21
msg.indexOf('#');   // -1
msg.indexOf('is');  // 10

msg.slice(5);   // 'that is so funny!'

msg.replace("funny", "sed"); // 'haha that is so sed!'\

// 템플릿 리터럴
let product = "Artichoke";
let price = 3.99;
let qty = 5;

`You boaut ${qty} ${product}. Total is: ${price * qty}`;
// 'You boaut 5 Artichoke. Total is: 19.950000000000003'

undefined
null

// Math 객체
Math.PI; // 3.141592653589793
Math.round(3.7);   // 4 (반올림)
Math.floor(2.6); // 2 (내림)
Math.random();  // 난수 생성
Math.floor(Math.random() * 10); // 0 ~ 9 사이의 자연수 난수 생성
Math.floor(Math.random() * 10) + 1; // 0 ~ 10 사이의 자연수 난수 생성