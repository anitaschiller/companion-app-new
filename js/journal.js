/* RATING KLICKBAR MACHEN: */

const stars = document.querySelectorAll('.star');
const rectangles = document.querySelectorAll('.rectangle');

stars.forEach((star, index, starsList) => {
  star.addEventListener('click', () => {
    changeRatingImageSource(
      index,
      starsList,
      '../assets/Star-Copy-7@2x.png',
      '../assets/Star@2x.png'
    );
  });
});

rectangles.forEach((rectangle, index, rectanglesList) => {
  rectangle.addEventListener('click', () => {
    changeRatingImageSource(
      index,
      rectanglesList,
      '../assets/Rectangle-Copy-14@2x.png',
      '../assets/Rectangle@2x.png'
    );
  });
});

function changeRatingImageSource(
  clickedIndex,
  elementsList,
  emptySource,
  filledSource
) {
  elementsList.forEach((element, index) => {
    // Falls schonmal geklickt und Elemente bereits eingefärbt wurden, werden zuerst alle Sterne zurück auf 'empty' gesetzt
    element.src = emptySource;
    // Wenn der Index des geklickten Sterns größer oder gleich ist wie der Index des gerade geprüften Elements aus der forEach-Schleife, soll die Source dieses Elements auf 'fill' gesetzt werden
    if (clickedIndex >= index) {
      element.src = filledSource;
    }
  });
}

/* DATUM DYNAMISCH EINSETZEN: */

const dateElement = document.querySelector('.date');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

dateElement.innerText = `TODAY, ${day}.${month}.${year}`;
