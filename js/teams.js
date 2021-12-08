/* const teams = [
  ['Daniela', 'Gratian', 'Janet', 'Jessica'],
  ['Joachim', 'Joel', 'Kristina', 'Laura'],
  ['Manuel', 'Matthias', 'Moritz', 'Ognjen'],
  ['Philipp', 'Thomas', 'Viktoriia', 'Anita'],
]; */

const apiUrl = 'https://muc-student-companion-api.vercel.app/api/';
fetch(apiUrl + 'teams')
  .then((data) => data.json())
  .then((teams) => renderTeams(teams));

// Container auf der Team-Page
const container = document.querySelector('.main-container');

function renderTeams(teams) {
  teams.forEach((team, index) => {
    // Section für jedes Team
    const teamWrapper = document.createElement('section');
    container.appendChild(teamWrapper);

    // Headline für jedes Team erzeugen & in die Section einhängen
    teamWrapper.appendChild(createTeamHeadline(index));

    // Für jedes Team Mitglied ein div erstellen, in die Section einhängen und nötige Klassen hinzufügen
    team.forEach((teamMember) => {
      const nameBox = document.createElement('div');
      nameBox.classList.add('team__member');
      nameBox.innerText = teamMember;
      teamWrapper.appendChild(nameBox);
    });
  });
}

function createTeamHeadline(teamIndex) {
  const headline = document.createElement('h3');
  headline.innerText = `Team ${teamIndex + 1}`;
  return headline;
}
