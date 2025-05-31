const images = ["apple2.png", "camera.png", "firework.png"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
