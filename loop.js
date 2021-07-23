function setUp() {
    var oner = document.getElementById("one");
    var twoer = document.getElementById("two");
    var threer = document.getElementById("three");
    var fourer = document.getElementById("four");
    var fiver = document.getElementById("five");
    var sixer = document.getElementById("six");
    var sevener = document.getElementById("seven");
    var eighter = document.getElementById("eight");
    var niner = document.getElementById("nine");
    var tener = document.getElementById("ten");
    var navBar = document.getElementById("header-wrapper");
    var navPage = document.getElementById("navigation-page");
    var hamBurger = document.getElementById("toggle-setting");


    hamBurger.onclick = function() {
        if (navPage.className == "") {
            navPage.className = "open";

            hamBurger.removeAttribute("src");
            hamBurger.setAttribute("src", "images/icon-close.svg");
        }

        else {
            navPage.className = "";

            hamBurger.removeAttribute("src");
            hamBurger.setAttribute("src", "images/icon-hamburger.svg");
        }
    }


    if (document.body.clientWidth >= 1024) {
        navBar.removeChild(hamBurger);
        navBar.appendChild(navPage);

        oner.removeAttribute("src");
        oner.setAttribute("src", "images/desktop/image-hero.jpg");

        twoer.removeAttribute("src");
        twoer.setAttribute("src", "images/desktop/image-interactive.jpg");

        threer.removeAttribute("src");
        threer.setAttribute("src", "images/desktop/image-deep-earth.jpg");

        fourer.removeAttribute("src");
        fourer.setAttribute("src", "images/desktop/image-night-arcade.jpg");

        fiver.removeAttribute("src");
        fiver.setAttribute("src", "images/desktop/image-soccer-team.jpg");

        sixer.removeAttribute("src");
        sixer.setAttribute("src", "images/desktop/image-grid.jpg");

        sevener.removeAttribute("src");
        sevener.setAttribute("src", "images/desktop/image-from-above.jpg");

        eighter.removeAttribute("src");
        eighter.setAttribute("src", "images/desktop/image-pocket-borealis.jpg");

        niner.removeAttribute("src");
        niner.setAttribute("src", "images/desktop/image-curiosity.jpg" );

        tener.removeAttribute("src");
        tener.setAttribute("src", "images/desktop/image-fisheye.jpg" );




    }
}



window.onload = function() {
    setUp();
}



