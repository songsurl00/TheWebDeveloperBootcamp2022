function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstname, lastname) {
    console.log(`Hey there, ${firstname} ${lastname[0]}.`);
}

function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y;
}

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();