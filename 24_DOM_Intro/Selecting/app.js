// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Male_Silkie.png/345px-Male_Silkie.png";
// }

// const squareImages = document.getElementsByClassName("square");

// for (let img of squareImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Male_Silkie.png/345px-Male_Silkie.png";
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}