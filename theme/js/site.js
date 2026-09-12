// Replaces jQuery 2.0.3, which the theme loaded from a CDN to do only this.
// Lives in a file rather than inline so the CSP can stay at script-src 'self'.
(function () {
    var top = document.querySelector('.go-top');
    if (top) {
        var sync = function () {
            top.classList.toggle('is-visible', window.scrollY > 200);
        };
        sync();
        window.addEventListener('scroll', sync, { passive: true });
        top.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Anchors that exist only to be styled should not jump to the top.
    document.addEventListener('click', function (event) {
        var anchor = event.target.closest('a[href="#"]');
        if (anchor) { event.preventDefault(); }
    });
}());
