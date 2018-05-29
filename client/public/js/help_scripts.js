$(document).ready(function($) {
    $(".table-row").click(function() {
        window.open($(this).parent().data("href"), '_blank');
    });
});

$(document).ready(function($) {
    $(".trash").click(function() {
        alert("Article Deleted!");
    });
});

