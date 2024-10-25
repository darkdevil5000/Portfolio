const profileButton = document.getElementById('profileButton');
const menu = document.getElementById('menu');
const socials = document.getElementById('socials');

profileButton.addEventListener('click', () => {
    profileButton.classList.toggle('active');
    menu.classList.toggle('show-menu');

    // Toggle social links visibility
    if (menu.classList.contains('show-menu')) {
        socials.classList.add('show-socials');
    } else {
        socials.classList.remove('show-socials');
    }
});
