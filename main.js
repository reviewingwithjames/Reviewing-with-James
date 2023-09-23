navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPage = link.id + '.html'; // Assume your content files are named home.html, about.html, etc.
        loadPage(targetPage);
        history.pushState(null, null, targetPage); // Update the URL
    });
});

// Add a popstate event listener to handle back and forward navigation
window.addEventListener('popstate', function (event) {
    const targetPage = location.pathname.replace('.html', '');
    loadPage(targetPage);
});
