var words = ["too much coffee","sleeping is joy", "winter is cozy","science fanatic"];
var i = 0;
var timer;


function getRandomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function getWordArray() {
    var word =   " '" + words[i]+ ".'";
    return word.split("");
}

function typingEffect() {
    var word = getWordArray();
    var loopTyping = function() {
        if (word.length > 0) {

            document.getElementById('word').innerHTML += word.shift();
        } else {
            setTimeout( deletingEffect, 1000);

            return false;
        };
        timer = setTimeout(loopTyping, getRandomNumberBetween(40,150));
    };

    loopTyping();
};

function deletingEffect() {
    var word = getWordArray();
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};

