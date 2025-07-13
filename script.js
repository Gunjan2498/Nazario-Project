const bar = document.getElementById('bar');
const nav = document.getElementById('nav-links');
const closeMenu = document.getElementById('close-menu');

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (closeMenu && nav) {
    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.remove('active');
    });
}
