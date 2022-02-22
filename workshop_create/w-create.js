import { createWorkshop, checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const form = document.getElementById('add-workshop');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const newWorkshop = {
        name: data.get('workshop'),
    };
    await createWorkshop(newWorkshop);
});
