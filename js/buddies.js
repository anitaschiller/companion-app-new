/* const buddies = [
  ['Daniela', 'Gratian'],
  ['Janet', 'Jessica'],
  ['Joachim', 'Joel'],
  ['Kristina', 'Laura'],
  ['Manuel', 'Matthias'],
  ['Moritz', 'Ognjen'],
  ['Philipp', 'Thomas'],
  ['Viktoria', 'Anita'],
]; */

const apiUrl = 'https://muc-student-companion-api.vercel.app/api/';
fetch(apiUrl + 'buddies')
  .then((data) => data.json())
  .then((buddies) => renderBuddies(buddies));

const container = document.querySelector('.team-container');

function renderBuddies(buddies) {
  buddies.forEach((buddyPair) => {
    //Auskommentierter Teil in der buddy.html wird dynamisch für jedes buddyPair nachgebaut
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
}
