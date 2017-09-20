<head>
    <meta name="description" content="A Template for generate Codes of Conduct">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">
    <link rel="stylesheet" href="./node_modules/milligram/dist/milligram.min.css">
    <link rel="stylesheet" href="https://milligram.github.io/styles/main.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="icon" href="assets/images/signpost.png">
    <title>Code of Conduct Remixer</title>

    <style>
h1 {text-align:center;}
    </style>
</head>

<div id="title" class="container" text-align="center">
    <h1>Code of Conduct Builder</h1>
    <a class=button href="mailto:alex0morley@gmail.com?Subject=Code%20of%20Conducts">This is still *very* alpha at the moment. Please send feedback to alex0morley@gmail.com or @alexmorley on twitter. Thanks!</a>
</div>

<section class="container">
    <div class="leftFrame" id="leftFrame" scrolling="no">
        <div class="container" id="code-generator">
            <h3>Getting Started</h3>
            <div id="your-info">
                <label>What is the name of your event?</label>
                <input type="text" name="event-name" id="event-name"> 
            </div>
            <div id="cocPreset">
                <label>Choose a Code of Conduct to start remixing?</label>
                <select id="coc-base">
                    <option value=" " label="" selected="selected">Choose one</option>
                    <option value="geekfeminisminit" label="General (Geek Feminism Wiki)">General (Geek Feminism Wiki)</option>
                    <option value="ContributorCovenant" label="Contributor Covenant">Contributor Covenant</option>
                    <option value="MozSciLab" label="MozSciLab">Mozilla Science Lab</option>
                </select>
            </div>
           </div>
        </div>
    </div>

    <div class="rightFrame" id = "noedit">
    <div id="rightFrame" contenteditable="true">
        <h2 id = your-title>Preview - Your Title Goes Here </h2> 
        <h4 id = "sub-title-pre" style="display: inline; font-weight:bold"> Based on:</h4> <h4 id = "sub-title" style="display: inline-block"> X </h4>
        <h3>Encouraged Behaviour</h3>
        <ul id="goodlist"></ul>
        <br>
        <h3>Unacceptable Behaviour</h3>
        <ul id="badlist"></ul>
        <h3>How can I report a violation of the Code of Conduct?</h3>
        <ul id="reporting"></ul>
    </div>
    <form action="download.php" style="display: inline-block; float:left" method="post">
	<input type="submit" id="download" value="Download As:">
    	<select id="ext_selector" style="display: inline-block; width: 50%" name="ext">
		<option value="docx">.docx (Word)</option>
		<option value="odt">.odt (Open Office)</option>
		<option value="html">.html (Web Page)</option>
    	</select>
    </form>
    </div>
</section>

<script src='assets/js/jquery.js'></script>
<script src='assets/js/main.js'></script>
