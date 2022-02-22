import { createWorkshop, checkAuth, logout, getOnlyWorkshops } from '../fetch-utils.js';
import { renderOnlyWorkshops } from '../render-utils.js';

checkAuth();

const form = document.getElementById('add-workshop');
const logoutButton = document.getElementById('logout');
const homeButton = document.getElementById('home');

homeButton.addEventListener('click', () => {
    location.replace('../');
});

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayOnlyWorkshops() {
    const workshopsEl = document.getElementById('info');
    workshopsEl.textContent = '';

    const workshops = await getOnlyWorkshops();

    for (let workshop of workshops) {
        console.log(workshop);
        const workshopEl = renderOnlyWorkshops(workshop);
        workshopsEl.append(workshopEl);
    }
    return workshopsEl;
}
displayOnlyWorkshops();

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const newWorkshop = {
        name: data.get('workshop'),
    };
    await createWorkshop(newWorkshop);
    displayOnlyWorkshops();
});
