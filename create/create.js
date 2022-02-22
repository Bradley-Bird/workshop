import { getWorkshops, logout, checkAuth, createParticipant } from '../fetch-utils.js';

checkAuth();
const form = document.getElementById('add-participant');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const select = document.getElementById('workshop');
    const workshops = await getWorkshops();
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
    const newParticipant = {
        workshop_id: data.get(`workshop`),
        name: data.get(`participant`),
    };
    await createParticipant(newParticipant);
    location.replace(`../workshops`);
    // console.log('hello', newParticipant);
});
