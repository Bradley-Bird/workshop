export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('workshop');
    p.classList.add('workshop-name');
    p.textContent = workshop.name;

    div.append(p);
    return div;
}

export function renderParticipant(participant) {
    const p = document.createElement('p');

    p.classList.add('participant');
    p.textContent = participant.name;

    return p;
}
