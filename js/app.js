scale = "Minor Pentatonic";
pos = "1";
timer = false;

$(".position_select").click(function() {
    timer = true;
    setTimeout(resetTimer, 5000)
});


function resetTimer() {
    timer = false;
}

function showscale(s) {
    scale = s;

    update();

}

function update() {

    im = "./images/" + scale + " - " + pos + " - [Made at Guitarscientist.com].png";
    $('#fretboard').attr('src', im);
    $('#1').removeClass('selected');
    $('#2').removeClass('selected');
    $('#3').removeClass('selected');
    $('#4').removeClass('selected');
    $('#5').removeClass('selected');
    if (pos == 1) {
        // $('#1').removeClass('default');
        $('#1').addClass('selected');
    }
    if (pos == 2) {
        // $('#2').removeClass('default');
        $('#2').addClass('selected');
    }

    if (pos == 3) {
        // $('#3').removeClass('default');
        $('#3').addClass('selected');
    }

    if (pos == 4) {
        // $('#4').removeClass('default');
        $('#4').addClass('selected');
    }

    if (pos == 5) {
        // $('#5').removeClass('default');
        $('#5').addClass('selected');
    }


    $('#Minor_Pentatonic').removeClass('selected');
    $('#Major_Pentatonic').removeClass('selected');
    $('#Blues').removeClass('selected');
    $('#Major').removeClass('selected');
    $('#Minor').removeClass('selected');


    if (scale == "Minor Pentatonic") {
        $('#Minor_Pentatonic').addClass('selected');
    }
    if (scale == "Major Pentatonic") {
        $('#Major_Pentatonic').addClass('selected');
    }
    if (scale == "Blues") {
        $('#Blues').addClass('selected');
    }
    if (scale == "Major") {
        $('#Major').addClass('selected');
    }
    if (scale == "Minor") {
        $('#Minor').addClass('selected');
    }

}

function show(n) {
    if (!timer) {
        pos = n;

        update();
    }





}