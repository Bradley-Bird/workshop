import {
    getOnlyWorkshops,
    getParticipant,
    logout,
    checkAuth,
    deleteParticipant,
    changeWorkshop,
} from '../fetch-utils.js';

checkAuth();
const params = new URLSearchParams(window.location.search);
const form = document.getElementById('change');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const select = document.getElementById('workshop');
    const workshops = await getOnlyWorkshops();
    // const params = new URLSearchParams(window.location.search);
    const participant = await getParticipant(params.get('id'));
    const participantName = document.getElementById('participant-name');
    participantName.textContent = `What work shop would ${participant.name} like to change to?`;
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.label = workshop.name;
        select.append(option);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const newWorkshop = {
        workshop_id: data.get('workshop'),
        id: params.get('id'),
    };
    await changeWorkshop(newWorkshop);
});
