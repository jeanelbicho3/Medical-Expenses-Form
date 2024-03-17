$(document).ready(function() {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

// accordion add panel

var $template = $(".template");

var hash = 2;
$(".btn-add-panel").on("click", function() {
    var $newPanel = $template.clone();
    $newPanel.find(".collapse").removeClass("in");
    $newPanel.find(".accordion-toggle").attr("href", "#" + (++hash))
        .text("Asegurado #" + hash);
    $newPanel.find(".panel-collapse").attr("id", hash);
    $("#accordion").append($newPanel.fadeIn());
});

$(document).on('click', '.glyphicon-remove-circle', function() {
    $(this).parents('.panel').get(0).remove();
});

// Select Cells on Table

// catch every click on a checkbox, localized into .common
$("#tabla-planes").on('click', 'input:checkbox', function() {
    $(this).closest('td').toggleClass('selected', this.checked);
});
// initialization
$('.common input:checkbox:checked').closest('td').addClass('selected');

// Toggle Detalles

$(document).ready(function() {
    $('.ver-detalles').click(function() {
        $('.detalles-plan').toggle("slide");
    });
});

$(document).ready(function() {
    $('.comparar-planes').click(function() {
        $('.comparacion-planes ').toggle("slide");
    });
});