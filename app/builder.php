<head>
<?php
include("head.php");
?>
</head>

<body class="main">
<?php
include("header.php");
?>

<script defer src='assets/js/jquery.js'></script>
<script defer src='assets/js/main.js'></script>
<script defer src='assets/js/crc32.js'></script>
<script defer src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
<script defer src="../assets/js/builder.js"></script>

<div class="flex-grid">
    <div class="col leftFrame" id="leftFrame" scrolling="no">
        <div id="code-generator">
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
                    <option value="confcodeofconduct" label="Conference CoC">Conf Code of Conduct</option>
                    <option value="slackdev" label="Slack">Slack Development</option>
                </select>
            </div>
        </div>
    </div>

    <div class="col rightFrame" id = "noedit">
        <form action="download.php" style="display: inline-block; float:left; padding-bottom:75" method="post" id="downloadForm">
            <textarea name="content" id="rightFrame">
            <!--div id="rightFrame" contenteditable="true">-->
                <h2 id = your-title>Preview - Your Title Goes Here </h2>
                <h4 id = "sub-title-pre" style="display: inline; font-weight:bold"> Based on:</h4> <h4 id = "sub-title" style="display: inline-block"> </h4>
                <h3>Encouraged Behaviour</h3>
                <ul id="goodlist"></ul>
                <h3>Unacceptable Behaviour</h3>
                <ul id="badlist"></ul>
                <h3>How can I report a violation of the Code of Conduct?</h3>
                <ul id="reporting"></ul>
            </textarea>
            <input type="submit" id="download" value="Download As:">
            <select id="ext_selector" style="display: inline-block; width: 50%" name="ext">
                <option value="none" selected="selected">Choose a file extension</option>
                <option value="docx">.docx (Word)</option>
                <option value="odt">.odt (Open Office)</option>
                <option value="html">.html (Web Page)</option>
                <option value="pdf">.pdf (Portable Document Format)</option>
            </select>
            <input type="hidden" id="id" name="id" value="0000000">
        </form>
    </div>
</div>
</body>

<?php
include("footer.php")
?>
