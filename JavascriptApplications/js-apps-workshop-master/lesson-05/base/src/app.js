import { setupCatalog, showCatalog } from './views/catalog.js';
import { setupCreate, showCreate } from './views/create.js';
import { setupLogin, showLogin } from './views/login.js';
import { setupRegister, showRegister } from './views/register.js';
import { setupDetails } from './views/details.js';
import { setupEdit } from './views/edit.js';
import { logout as apiLogout } from './api/data.js';

window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    setupCatalog(main, document.getElementById('catalog'), setActiveNav);
    setupCreate(main, document.getElementById('create'), setActiveNav);
    setupLogin(main, document.getElementById('login'), setActiveNav);
    setupRegister(main, document.getElementById('register'), setActiveNav);
    setupDetails(main, document.getElementById('details'), setActiveNav);
    setupEdit(main, document.getElementById('edit'), setActiveNav);
    document.getElementById('views').remove();


    const links = {
        'catalogLink': showCatalog,
        'createLink': showCreate,
        'loginLink': showLogin,
        'registerLink': showRegister,
        'logoutBtn': logout,
    };
    setupNavigation();

    // Start application in catalog view
    showCatalog();

    async function logout() {
        await apiLogout();
        setUserNav();
        showCatalog();
    }
});