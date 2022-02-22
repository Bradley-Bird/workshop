import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';
import { renderParticipant, renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshop() {
    const workshopsEl = document.getElementById('workshop-list');

    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);
        for (let participant of workshop.participants) {
            const participantEl = renderParticipant(participant);
            workshopEl.append(participantEl);
        }
        workshopsEl.append(workshopEl);
    }
}
displayWorkshop();
