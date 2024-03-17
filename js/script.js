window.onload = function() {

    setTimeout(() => {

        new Audio("goku.mp3").play();

        var overlay = document.getElementById('overlay');
        var opacity = 1;
        var interval = setInterval(function () {
            if (opacity <= 0) {
                overlay.style.display = 'none';
                clearInterval(interval);
            } else {
                opacity -= 0.02;
                overlay.style.opacity = opacity;
            }
        }, 20);
     }, 1000);

        
}
