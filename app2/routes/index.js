var express = require('express');
var router = express.Router();

var TEST = "<p> Here is some text I would like to display </p>";
var HEAD = `<head>
    <meta name="description" content="A Template for generate Codes of Conduct">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">
    <link rel="stylesheet" href="css/milligram.min.css">
    <link rel="stylesheet" href="https://milligram.github.io/styles/main.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/signpost.png">
    <title>Code of Conduct Builder</title>
</head>`;

var FOOTER = `<footer id="footer">
    <small> 
        This work is licensed under <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
    </small>

        <div data-reactid="67">
        <a class="flink" href="tos.php">Terms of Service</a>   
        <a class="flink" href="privacy.php">Privacy Policy</a>   
        <!--<a class="flink" href="faq">FAQ</a>-->
        <a class="flink" href="contact.php">Contact</a>   
    </div>
    </footer>`;

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express', HEAD: HEAD, FOOTER: FOOTER});
    });

router.get('/builder', function(req, res, next) {
    res.render('builder', { title: 'Builder'});
});

module.exports = router;
