//STARS

const stars = document.querySelectorAll('.star');
const starsArr = Array.from(stars);
let untilStar;

starsArr.forEach(fillStars);

function fillStars(star, i) {
  star.addEventListener('click', () => {
    starsArr.forEach((starArrowItem) => {
      starArrowItem.classList.remove('star__full');
    });

    untilStar = starsArr.slice(0, i + 1);

    untilStar.forEach((untilStarItem) => {
      untilStarItem.classList.add('star__full');
    });
  });
}

//COMPREHENSION

const squares = document.querySelectorAll('.square');
const squaresArr = Array.from(squares);
let untilSquare;

squaresArr.forEach(fillSquares);

function fillSquares(square, i) {
  square.addEventListener('click', () => {
    squaresArr.forEach((squaresArrowItem) => {
      squaresArrowItem.classList.remove('comprehension__full');
    });

    square.classList.add('comprehension__full');

    untilSquare = squaresArr.slice(0, i);

    untilSquare.forEach((untilSquareItem) => {
      untilSquareItem.classList.add('comprehension__full');
    });
  });
}
