fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
  .then((res) => res.json())
  .then((entries) => {
    console.log(entries);
    entries.forEach((entry, i) => {
      renderEntries(entry, i);
      createStars(entry, i);
    });
  });

const container = document.querySelector('.container');

function renderEntries(entry, i) {
  const card = document.createElement('div');
  card.classList.add('journal', 'sh-dark');
  container.appendChild(card);
  card.innerHTML = `   <p class="sebo-14-dark-up">Date</p>
        <div class="journal__div">
            <p class="reg">Rating:</p>
            <div class="stars-container${i}">
            </div>
        </div>
        <div class="journal__div">
          <p class="reg">Comprehension:</p>
          <div class="comprehension">
          </div>
        </div>
         
        <div class="journal__div">
        <p class="reg">Motto:</p>
        <p class="motto">"${entry.motto}"</p>
    </div>
    <div class="journal__div">
        <p class="reg">Notes:</p>
        <p class="notes">"${entry.notes}"
        </p>
    </div>`;
}

function createStars(rating, i) {
  const starsContainer = document.querySelector(`.stars-container${i}`);
  let starsArray = [];

  for (let j = 0; j < rating; j++) {
    const star = document.createElement('div').classList.add('star__full');
    starsArray.push(star);
  }
}
