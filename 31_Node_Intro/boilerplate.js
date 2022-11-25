const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// 비동기 방식
// fs.mkdir("Dogs", { recursive: true }, (e) => {
//     console.log("In the Callback!!");
//     if (e) throw e;
// });

// 동기 방식
// fs.mkdirSync("Cats");
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.js`);
    fs.writeFileSync(`${folderName}/app.css`);
} catch (e) {
    console.log("SOMETHING WENT WRONG!");
    console.log(e);
}