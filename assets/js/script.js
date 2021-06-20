$(function() {
    // Tooltip de Bootstrap //
$('[data-bs-toggle="tooltip"]').tooltip();

});
  // Smooth Scroll de JQuery //
$('.navbar a').on('click', function(e) {
    if (this.hash !=='') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});