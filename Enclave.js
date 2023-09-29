function start() {
    var button = document.querySelector('.Start');
    button.style.display = 'none';

    var gif = document.querySelector('.gif');
    gif.style.display = 'block';

    var button2 = document.querySelector('.text2');
    button2.style.display = 'block';

    var audio = document.getElementById('audioPlayer');
    audio.src = 'PowerArmor.mp4.mp4';
    audio.play();
}


function toggleText() {
    var textElement = document.getElementById('textToToggle');
    textElement.style.display = 'block';
}

function toggleText2() {
    var textElement2 = document.getElementById('textToToggle2');
    textElement2.style.display = 'none';

    var textElement3 = document.getElementById('textToToggle3');
    textElement3.style.display = 'block';

    var textElement1 = document.getElementById('textToToggle');
    textElement1.style.display = 'none';

    var button2 = document.getElementById('textToToggle2');
    button2.style.display = 'none';

    var button4 = document.getElementById('textToToggle4');
    button4.style.display = 'block';

    var audio = document.getElementById('audioPlayer');
    audio.src = 'DontHaveAny.mp4.mp4';
    audio.play();
}


function showText4() {
    var textElement4 = document.getElementById('textToToggle4');
    textElement4.style.display = 'none';

    var button5 = document.getElementById('end1');
    button5.style.display = 'block';

    var textElement3 = document.getElementById('textToToggle3');
    textElement3.style.display = 'none';
}

function end() {
    alert("Done!");
    location.reload();
}
