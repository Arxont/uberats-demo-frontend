window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("footer_button").style.display = "block";
    } else {
        document.getElementById("footer_button").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}