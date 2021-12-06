const buddies = [
  ['Daniela', 'Gratian'],
  ['Janet', 'Jessica'],
  ['Joachim', 'Joel'],
  ['Kristina', 'Laura'],
  ['Manuel', 'Matthias'],
  ['Moritz', 'Ognjen'],
  ['Philipp', 'Thomas'],
  ['Viktoria', 'Anita'],
];

console.log(buddies);

const container = document.querySelector('.team-container');

buddies.forEach((buddyPair) => {
  const buddySection = document.createElement('section');
  container.appendChild(buddySection);
  buddySection.classList.add('team');

  const plusIcon = document.createElement('img');
  plusIcon.src = 'assets/Plus@2x.png';
  plusIcon.classList.add('plus');
  buddySection.appendChild(plusIcon);

  buddyPair.forEach((buddy) => {
    const nameBox = document.createElement('div');
    buddySection.appendChild(nameBox);
    nameBox.classList.add('team__member');
    nameBox.innerHTML = buddy;
  });
});
