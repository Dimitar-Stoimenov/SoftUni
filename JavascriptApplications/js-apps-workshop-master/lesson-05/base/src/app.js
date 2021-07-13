import { setupCatalog } from './views/catalog.js';
import { setupCreate, } from './views/create.js';
import { setupLogin, } from './views/login.js';
import { setupRegister, } from './views/register.js';
import { setupDetails } from './views/details.js';
import { setupEdit } from './views/edit.js';
import { logout as apiLogout } from './api/data.js';

import { createNavigation } from './navigation.js';

window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    const navigation = createNavigation(main, nav);

    navigation.registerView('catalog', document.getElementById('catalog'), setupCatalog, 'catalogLink');
    navigation.registerView('details', document.getElementById('details'), setupDetails);
    navigation.registerView('login', document.getElementById('login'), setupLogin, 'loginLink');
    navigation.registerView('register', document.getElementById('register'), setupRegister, 'registerLink');

    navigation.goTo('catalog');

    /*
    setupCreate(main, document.getElementById('create'), setActiveNav);
    setupRegister(main, document.getElementById('register'), setActiveNav);
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

    
    function setupNavigation() {
        setUserNav();
        
        nav.addEventListener('click', (ev) => {
            if (ev.target.tagName == 'A') {
                const handler = links[ev.target.id];
                if (handler) {
                    ev.preventDefault();
                    handler();
                }
            }
        });
    }
    */

    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
    }

    function setUserNav() {
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
        } else {
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
        }
    }

    async function logout() {
        await apiLogout();
        setUserNav();
        showCatalog();
    }
});