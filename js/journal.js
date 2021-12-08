/* TAGEBUCHEINTRÄGE DYNAMISCH ANZEIGEN LASSEN: */

fetch('https://muc-student-companion-api.vercel.app/api/journals')
  .then((response) => response.json())
  .then((data) => renderDiaryEntries(data));

const journalEntriesContainer = document.querySelector('.container');

function renderDiaryEntries(diaryEntries) {
  diaryEntries.forEach((entry) => {
    const wrappingArticle = document.createElement('article');
    journalEntriesContainer.appendChild(wrappingArticle);
    wrappingArticle.classList.add('journal');


    wrappingArticle.innerHTML = `
    <p class="sebo-14-dark-up">Date</p>
    <div class="journal__div stars">
      <p class="reg">Rating:</p>
      <div class="comprehension">${renderRatingItems(
        entry.rating,
        5,
        '/assets/Star-Copy-7@2x.png',
        '/assets/Star@2x.png'
      )}</div>
    </div>
    <div class="journal__div">
      <p class="reg">Comprehension:</p>
      <div class="comprehension">${renderRatingItems(
        entry.comprehension,
        10,
        '/assets/Rectangle-Copy-14@2x.png',
        '/assets/Rectangle@2x.png'
      )}</div>
    </div>
    <div class="journal__div">
      <p class="reg">Motto:</p>
      <p class="motto">${entry.motto}</p>
    </div>
    <div class="journal_div">
      <p class="reg">Notes:</p>
      <p class="notes">${entry.notes}</p>
    </div>
    `;
  });
}


function renderRatingItems(
  numberOfColoredItems,
  numberOfTotalItems,
  imageSourceEmpty,
  imageSourceFull
) {
  let htmlStringRatingItems = '';
  for (let i = 0; i < numberOfColoredItems; i++) {
    htmlStringRatingItems =
      htmlStringRatingItems + `<img src=${imageSourceFull}>`;
  }
  for (let i = numberOfColoredItems; i < numberOfTotalItems; i++) {
    htmlStringRatingItems =
      htmlStringRatingItems + `<img src=${imageSourceEmpty}>`;
  }
  return htmlStringRatingItems;
}
