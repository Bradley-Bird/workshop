const SUPABASE_URL = 'https://rkpkbgcxtxmmqwaozrit.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrcGtiZ2N4dHhtbXF3YW96cml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NzksImV4cCI6MTk1OTkxNzQ3OX0.BlZaNNVLhHKpWOLgA-78IfDScamHmyZyr18toNO8npQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
//get only workshops
export async function getOnlyWorkshops() {
    const resp = await client.from('workshops').select('*');
    console.log('resp', resp);
    return checkError(resp);
}
//get all workshops with participants
export async function getWorkshops() {
    const resp = await client.from('workshops').select(`*, participants (*)`);
    return checkError(resp);
}
//add new participants
export async function createParticipant(participant) {
    const resp = await client.from('participants').insert(participant);
    // console.log('createData', resp);
    return checkError(resp);
}
//create new Workshop
export async function createWorkshop(workshop) {
    const resp = await client.from('workshops').insert(workshop);
    return checkError(resp);
}
//delete old participants
export async function deleteParticipant(id) {
    const resp = await client.from('participants').delete().match({ id: id }).single();
    return checkError(resp);
}
//premade
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
