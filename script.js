var currentQ = "";
var currentA = "";

function newQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        function (val) {
            currentQ = val.quoteText;
            if (val.quoteAuthor == "") {
                val.quoteAuthor = "Anon";
            }
            currentA = val.quoteAuthor;
            $('#text').html(JSON.stringify(val.quoteText));
            $('#author').html(JSON.stringify(val.quoteAuthor));
        });
}

$("#quote-box").on("click", function () {
    newQuote();
});

$(document).ready(function () {
    newQuote();
});

$("#tweet-quote").on("click", function () {
    window.open("https://twitter.com/intent/tweet?text= %22" + currentQ + "%22 %20%20-" + currentA);
});