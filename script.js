$(document).ready(function () {
    // TODO: Test to see if script works, uncomment or comment to disable or enable.
    // $(`main`).hide(3000).delay(1000).show(500);

    // * Mouse Events
    $(`img`).mouseenter(function() {
        $(this).fadeTo(600, 0.01);
    }).mouseleave(function() {
        $(this).fadeTo(1000, 1);
    }).click(function() {
        $(this).next().toggle(700);
    });

    // * Footer Events
    $(`footer`).click(function() {
        $(this).animate({
            top: `-=50px`,
            opacity: `-=0.2`
        }, 900);
    }).dblclick(function() {
        $(this).animate({
            top: `0`,
            opacity: `1`
        }, 900);
    });
});

// Sliphover
$("#price").sliphover();