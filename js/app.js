scale = "Minor Pentatonic";
old_scale = "Minor Pentatonic";
pos = "1";
timer = false;




function resetTimer() {
    timer = false;
}

function showscale(s) {


    if (s == scale) {
        scale = old_scale;
        update(old_scale, pos);
        return;
    }
    old_scale = scale;
    scale = s;

    update(scale, pos);


}

function update(thescale, n) {


    im = "./images/" + thescale + " - " + pos + " - [Made at Guitarscientist.com].png";
    $('#fretboard').attr('src', im);

    $('#-1').removeClass('selected');
    $('#0').removeClass('selected');
    $('#1').removeClass('selected');
    $('#2').removeClass('selected');
    $('#3').removeClass('selected');
    $('#4').removeClass('selected');
    $('#5').removeClass('selected');
    $('#6').removeClass('selected');
    $('#7').removeClass('selected');

    if (n == -1) {
        // $('#1').removeClass('default');
        $('#-1').addClass('selected');
    }
    if (n == 0) {
        // $('#1').removeClass('default');
        $('#0').addClass('selected');
    }
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
    if (n == 6) {
        // $('#4').removeClass('default');
        $('#6').addClass('selected');
    }

    if (n == 7) {
        // $('#5').removeClass('default');
        $('#7').addClass('selected');
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


    if (thescale == "Minor Pentatonic") {
        $('#Minor_Pentatonic').addClass('selected');
    }
    if (thescale == "Major Pentatonic") {
        $('#Major_Pentatonic').addClass('selected');
    }
    if (thescale == "Blues") {
        $('#Blues').addClass('selected');
    }
    if (thescale == "Major") {
        $('#Major').addClass('selected');
    }
    if (thescale == "Minor") {
        $('#Minor').addClass('selected');
    }

    if (thescale == "Lydian") {
        $('#Lydian').addClass('selected');
    }
    if (thescale == "Dorian") {
        $('#Dorian').addClass('selected');
    }
    if (thescale == "Phrygian") {
        $('#Phrygian').addClass('selected');
    }
    if (thescale == "Mixolydian") {
        $('#Mixolydian').addClass('selected');
    }

    if (thescale == "Major7") {
        $('#Major7').addClass('selected');
    }
    if (thescale == "Minor7") {
        $('#Minor7').addClass('selected');
    }
    if (thescale == "Dominant7") {
        $('#Dominant7').addClass('selected');
    }
    if (thescale == "Diminished7") {
        $('#Diminished7').addClass('selected');
    }


}

function show(n) {

    if (n < 1) pos = 5 + n;
    else if (n > 5) pos = n - 5;
    else pos = n;
    update(scale, n);

}