import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';
import { displayFamilies } from '../families.js';

checkAuth();

const familiesEl = document.querySelector('.bunnies-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

