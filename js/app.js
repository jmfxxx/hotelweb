$().ready(function () {
    console.log('Run');

    // 原始寫法
    var navMenu = $('.nav-barmenu')
    var navContainer = $('.nav-container')
    // 原始寫法
    navMenu.click(function () {
        navContainer.toggleClass("nav-show-menu")
    })


    // $(".nav-barmenu").click(function () {
    //     console.log('you click btn !!!');

    //     $(".container > .row").addClass("nav-show-menu");
    //     $(".nav-show-menu .nav-list li").toggle();

    // });


    // $(".scrollTopBtn").on('click', 'a[href^="#"]', function (event) {
    //     event.preventDefault();

    //     $('.scrollTopBtn').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);
    // });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    // end
})