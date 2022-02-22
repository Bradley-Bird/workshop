import { getWorkshops, logout, checkAuth } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const select = document.getElementById('workshop-select');
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.label = workshop.name;
        select.append(option);
    }
});
