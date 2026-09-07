var slideshow = document.getElementById('shw');
var slides = slideshow.getElementsByClassName('sld');
var idx = 0;

function change_slide() {
    slides[idx].style.display = 'none';
    idx = (idx + 1) % slides.length;
    slides[idx].style.display = 'block';
}
setInterval(change_slide, 3000);