export default function favorite() {
    const favoriteIcons = document.querySelectorAll('.fa-heart');

    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid', 'favorite-animate');
            } else {
                icon.classList.remove('fa-solid', 'favorite-animate');
                icon.classList.add('fa-regular');
            }
        });
    });
};

