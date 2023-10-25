document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


const floatingButton = document.querySelector('.keatas');

function showButton() {
    floatingButton.classList.add('visible');
}

function hideButton() {
    floatingButton.classList.remove('visible');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        showButton();
    } else {
        hideButton();
    }
});





