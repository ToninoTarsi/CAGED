scale = "Minor Pentatonic";
pos = "1";
timer = false;




function resetTimer() {
    timer = false;
}

function showscale(s) {
    scale = s;
    update(pos);
}

function update(n) {

    im = "./images/" + scale + " - " + n + " - [Made at Guitarscientist.com].png";
    $('#fretboard').attr('src', im);
    $('#1').removeClass('selected');
    $('#2').removeClass('selected');
    $('#3').removeClass('selected');
    $('#4').removeClass('selected');
    $('#5').removeClass('selected');
    if (n == 1) {
        // $('#1').removeClass('default');
        $('#1').addClass('selected');
    }
    if (n == 2) {
        // $('#2').removeClass('default');
        $('#2').addClass('selected');
    }

    if (n == 3) {
        // $('#3').removeClass('default');
        $('#3').addClass('selected');
    }

    if (n == 4) {
        // $('#4').removeClass('default');
        $('#4').addClass('selected');
    }

    if (n == 5) {
        // $('#5').removeClass('default');
        $('#5').addClass('selected');
    }


    $('#Minor_Pentatonic').removeClass('selected');
    $('#Major_Pentatonic').removeClass('selected');
    $('#Blues').removeClass('selected');
    $('#Major').removeClass('selected');
    $('#Minor').removeClass('selected');

    $('#Lydian').removeClass('selected');
    $('#Dorian').removeClass('selected');
    $('#Phrygian').removeClass('selected');
    $('#Mixolydian').removeClass('selected');

    $('#Major7').removeClass('selected');
    $('#Minor7').removeClass('selected');
    $('#Dominant7').removeClass('selected');
    $('#Diminished7').removeClass('selected');


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

    if (scale == "Lydian") {
        $('#Lydian').addClass('selected');
    }
    if (scale == "Dorian") {
        $('#Dorian').addClass('selected');
    }
    if (scale == "Phrygian") {
        $('#Phrygian').addClass('selected');
    }
    if (scale == "Mixolydian") {
        $('#Mixolydian').addClass('selected');
    }

    if (scale == "Major7") {
        $('#Major7').addClass('selected');
    }
    if (scale == "Minor7") {
        $('#Minor7').addClass('selected');
    }
    if (scale == "Dominant7") {
        $('#Dominant7').addClass('selected');
    }
    if (scale == "Diminished7") {
        $('#Diminished7').addClass('selected');
    }

}

function show(n) {

    update(n);

}