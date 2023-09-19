document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const main = document.querySelector('main');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = link.id + '.html'; // Assume your content files are named home.html, about.html, etc.
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                main.innerHTML = data;
            });
    }
});
