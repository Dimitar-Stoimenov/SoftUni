// intialize links
// setup event listeners
// update active link
// render view
// keep association between links and views

// export:
// - goTo - update active links; render view
// - setUserNav
// - registerView

export function createNavigation(main, nav) {
    const links = {};
    const views = {};
    setupNavigation();

    return {
        setUserNav
    };


    function setupNavigation() {
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
}