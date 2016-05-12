function RandomQuoteGenerator(){

}

RandomQuoteGenerator.prototype = {
    generateRandomQuote: function($scope){
        var randomNumColor = Math.floor((Math.random() * 10)),
            randomNumQuote = Math.floor((Math.random() * 10)),
            colors = ['#F44336', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#009688', '#8BC34A', '#FF9800', "#FFC107", "#795548", "#607D8B"],
            quotes = [
                        {'quote' : 'One quote', 'by' : 'Some dude'},
                        {'quote' : 'Two quotes', 'by' : 'A different guy'},
                        {'quote' : 'Three quotes', 'by' : 'A guy'},
                        {'quote' : 'Four quotes', 'by' : 'Another guy'},
                        {'quote' : 'Five quotes', 'by' : 'Yet another guy'},
                        {'quote' : 'Six quotes', 'by' : 'Some other guy'},
                        {'quote' : 'Seven quotes', 'by' : 'A random internet dude'},
                        {'quote' : 'Eight quotes', 'by' : 'Some hobo'},
                        {'quote' : 'Nine quotes', 'by' : 'Someone else'},
                        {'quote' : 'Ten quotes', 'by' : 'The dude'}
                    ];

        $("body, .btn").css("background-color", colors[randomNumColor]);
        $(".quote").css("color", colors[randomNumColor]);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[randomNumQuote].quote + '" ' + quotes[randomNumQuote].by));
        $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(quotes[randomNumQuote].by)+'&content=' + encodeURIComponent(quotes[randomNumQuote].quote));

        $scope.randomQuote = quotes[randomNumQuote].quote;
        $scope.by = quotes[randomNumQuote].by;
    }
}
