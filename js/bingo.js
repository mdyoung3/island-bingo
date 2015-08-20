/**
 * Created by drynears on 2/11/15.
 */
$(document).ready(function () {
    var $love_words = [
        'beach',
        'tiki',
        'pelican',
        'surf',
        'bathing suit',
        'hang five',
        'dock',
        'longboard',
        'limpet',
        'sailboat',
        'tsunami',
        'undertow',
        'volleyball',
        'water',
        'tide',
        'tan',
        'swim',
        'vacation',
        'sunscreen',
        'sunbathe',
        'beach',
        'public',
        'waves',
        'starfish',
        'shark',
        'seagull',
        'sea',
        'scuba',
        'sand dollar',
        'sandcastle ',
        'sandbar',
        'sandals',
        'sand',
        'rest',
        'relax',
        'reef',
        'palm tree',
        'hermit crab',
        'island',
        'jellyfish',
        'Frisbee',
        'fins',
        'dune',
        'currents',
        'crab',
        'cove',
        'coral',
        'coast',
        'clam bake',
        'cape',
        'boogie board',
        'barnacle',
        'boardwalk',
        'bikini',
        'beachball',
        'bay',
        'bathing suit',
        'whitecaps',
        'yacht',
        'wharf',
        'wet',
        'weekend',
        'water bottle',
        'umbrella',
        'snorkel',
        'towel',
        'tide pool',
        'surfboard',
        'paddleboat',
        'swimming',
        'kayak',
        'kelp'
    ];

    function changeWord() {
        var item = $love_words[Math.floor(Math.random()*$love_words.length)];
        var position = $love_words.indexOf(item);
        if(position > -1) {
            $love_words.splice(position, 1);
        }
        console.log(item);
        if (item) {
            return document.getElementById("word").innerHTML = item;
        } else {
            return document.getElementById("word").innerHTML = "Game Over!";
        }
    }

    jQuery('#changeForm').submit(function () {
        changeWord();
        return false;
    });
});
