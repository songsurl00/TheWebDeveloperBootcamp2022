// console.log("BEFORE CINDITINAL")
// if (1 + 1 === 2) {
//     console.log("MATH STILL WORKS!")
// }
// console.log("AFTER CINDITINAL")

// console.log("BEFORE CINDITINAL")
// if (1 + 2 === 2) {
//     console.log("MATH STILL WORKS!")
// }
// console.log("AFTER CINDITINAL")

// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!")
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!")
// }
// console.log(random);

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE MONDAYS!")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT< ESPECIALLY AFTER WORK!")
// } else {
//     console.log("MEH")
// }

// const age = 89;

// if (age < 5) {
//     console.log("Yor are a baby. You get in for free")
// } else if (age < 10) {
//     console.log("Yot are a child. Yot pay $10")
// } else if (age < 65) {
//     console.log("Yot are a adult. Yot pay $20")
// } else {
//     console.log("Yot are a senior. You pay $10")
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}