const images = [
  "https://mediaim.expedia.com/destination/1/229dcdf865e562e96ae2f1237e55ead0.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Canyon_River_Tree_%28165872763%29.jpeg",
  "https://niagarafallstickets.tours/wp-content/uploads/2022/07/niagara-falls-at-night.webp",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = chosenImage;

bgImage.style.display = "block";
bgImage.style.margin = "0 auto";

// 배경 이미지로 설정
document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
