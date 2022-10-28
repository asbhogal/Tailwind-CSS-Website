const   mobileMenu = document.getElementById('mobile-nav-menu'),
        mobileBtn = document.getElementById('mobile-nav-btn');

window.onload = () => {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('hidden');
    })
}