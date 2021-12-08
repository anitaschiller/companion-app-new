/* RATING KLICKBAR MACHEN: */

const stars = document.querySelectorAll('.star');
const rectangles = document.querySelectorAll('.rectangle');

let rating = 0;
let comprehension = 0;

stars.forEach((star, index, starsList) => {
  star.addEventListener('click', () => {
    changeRatingImageSource(
      index,
      starsList,
      '/assets/Star-Copy-7@2x.png',
      '/assets/Star@2x.png'
    );
    rating = index + 1;
  });
});

rectangles.forEach((rectangle, index, rectanglesList) => {
  rectangle.addEventListener('click', () => {
    changeRatingImageSource(
      index,
      rectanglesList,
      '/assets/Rectangle-Copy-14@2x.png',
      '/assets/Rectangle@2x.png'
    );
    comprehension = index + 1;
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

/* FORMULAR DATEN AUF API POSTEN: */

const saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', () => {
  const motto = document.querySelector('#motto').value;
  const notes = document.querySelector('#notes').value;
  const newDiaryEntry = {
    rating: rating,
    comprehension: comprehension,
    motto: motto,
    notes: notes,
  };

  fetch('https://muc-student-companion-api.vercel.app/api/journals', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newDiaryEntry),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});
