function HighScores() {
    var high_scores = document.getElementsById("high-scores");
    if (typeof (Storage) !== "undefined") {
        var scores = false;
        if (localStorage["high-scores"]) {
            high_scores.style.display = "block";
            high_scores.innerHTML = '';
            scores = JSON.parse(localStorage["high-scores"]);
            scores = scores.sort(function (a, b) { return parseInt(b) - parseInt(a) });

            for (var i = 0; i < 10; i++) {
                var s = scores[i];
                var fragment = document.createElement('li');
                fragment.innerHTML = (typeof (s) != "undefined" ? s : "");
                high_scores.appendChild(fragment);
            }
        }
    } else {
        high_scores.style.display = "none";
    }
    gameSection.style.display = "none";
}
function UpdateScore(score) {
    var gameSection = document.getElementById("game");
    gameSection.style.display = "block";
    if (typeof (Storage) !== "undefined") {
        var current = parseInt(score);
        var scores = false;
        var player = prompt("Please enter your name", "")
        if (player != null) {
            if (localStorage["high-scores"]) {

                scores = JSON.parse(localStorage["high-scores"]);
                scores = scores.sort(function (a, b) { return parseInt(b) - parseInt(a) });

                for (var i = 0; i < 10; i++) {
                    var s = parseInt(scores[i]);

                    var val = (!isNaN(s) ? s : 0);
                    if (current > val) {
                        val = current;
                        scores.splice(i, 0, player + "     " + parseInt(current));
                        break;
                    }
                }

                scores.length = 10;
                localStorage["high-scores"] = JSON.stringify(scores);

            } else {
                var scores = new Array();
                scores[0] = current;
                localStorage["high-scores"] = JSON.stringify(scores);
            }
            HighScores();
        }
    }
}
