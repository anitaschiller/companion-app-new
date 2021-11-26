console.log('Hi');

const teams = [
  ['Daniela', 'Gratian', 'Janet', 'Jessica'],
  ['Joachim', 'Joel', 'Kristina', 'Laura'],
  ['Manuel', 'Matthias', 'Moritz', 'Ognjen'],
  ['Philipp', 'Thomas', 'Viktoriia', 'Anita'],
];

// Container auf der Team-Page
const container = document.querySelector('.main-container');

teams.forEach((team, index) => {
  // Section für jedes Team
  const teamWrapper = document.createElement('section');
  container.appendChild(teamWrapper);

  // Headline für jedes Team erzeugen & in die Section einhängen
  const headline = document.createElement('h3');
  headline.innerText = `Team ${index + 1}`;
  teamWrapper.appendChild(headline);

  // Für jedes Team Mitglied ein div erstellen, in die Section einhängen und nötige Klassen hinzufügen
  team.forEach((teamMember) => {
    const nameBox = document.createElement('div');
    nameBox.classList.add('team__member');
    nameBox.innerText = teamMember;
    teamWrapper.appendChild(nameBox);
  });
});

let clickedStarIndex;

const stars = document.querySelectorAll('.star');
console.log(stars);
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    clickedStarIndex = index;
    console.log(clickedStarIndex);
  });
});
