// Global states
var DEBUG = true
var EDITOR = true

function replace_section(section_json,section_json_section, section_html) {
    DEBUG && console.log(section_html);
    section_html.empty();
    if (section_json == null){
        section_html.append($("<li><a>[The selected Code of Conduct doesn't include Unacceptable Behaviour]</a></li>"));
    }
    else{
        $.each(section_json[section_json_section], function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");      
            section_html.append($li);            
        });
    }
}

function onLoad() { 
    // Choose editor
    ss = function (x) {
        if (EDITOR) {
            return $(tinymce.editors[0].getBody()).find(x)
        } else {        
        return $(x)
        }
    } 

    $("#switch_ed").click( function () {
        DEBUG && console.log("switch ed");
        var text = $("#rightFrame").text();
        $("#rightFrame").remove();
        body = $("<div id='rightFrame'>\n</div>");
        $("#mceu_12").replaceWith(body);
        $("#rightFrame").html($.parseHTML(text));
        EDITOR = false;
    });

    // When a new Code of Conduct is selected
    $('#coc-base').on('change', async function() {
        var selectedBase = $('#coc-base option:selected').val();
        DEBUG && console.log(selectedBase);
        const response = await fetch("resources/"+selectedBase+".json");
        const json_obj = await response.json();
        DEBUG && console.log("Read attempted");

        // Replace the:
        // Sub-Title:
        ss('#sub-title').text(json_obj["title"]);
        // Unacceptable Behaviour               
        replace_section(json_obj.unacceptable_behaviour, "list", ss("#badlist"));
        // Encouraged
        replace_section(json_obj.encouraged_behaviour, "list", ss("#goodlist"));
        // Reporting
        replace_section(json_obj.reporting, "howto",  ss("#reporting"));
    });

    // Event Title
    $('#event-name').on('input', function() {
        ss('#your-title').text(this.value + '\'s Code of Conduct');
    });

    // Run Conversion
    $("#ext_selector").on('change', function () {
        var text = $("#rightFrame").html();
        var ext_info = $("#ext_selector option:selected").val();
        if (ext_info != "none") {
            var id_info = CRC32.str(text);
            $("#id").val(id_info);
            var url = "save.php";
            console.log(ext_info);
            $.post(url,
                    {ext: ext_info,
                        rightFrame: text,
                        id: id_info
                    }, function () {
                        DEBUG && console.log(text.length + " characters sent. Hash: " + id_info + "Ext: " + ext_info);
                    });
        }
    });

    /*
       $("#downloadForm").submit(function(){
       var extension = $("#downloadForm :input[name=ext]")[0].value;
       var id = $("#downloadForm :input[name=id]")[0].value;
       var filename = 'your_license.' + id + '.' + extension;
       if(extension != "pdf"){
       return true;
       }

       var divContents = $("#rightFrame").html();
       var printWindow = window.open('', '', 'height=400,width=800');
       printWindow.document.write('<html><head><title>' + filename + '</title>');
       printWindow.document.write('</head><body>');
       printWindow.document.write('<link rel="stylesheet" href="../node_modules/milligram/dist/milligram.css"/>')
       printWindow.document.write(divContents);
       printWindow.document.write('</body></html>');

       setInterval( function () {
       printWindow.document.close();
       printWindow.print();
       }, 100); // Non-Firefox browsers need a delay or they print a blank page

       return false;
       });
       */
}

DEBUG && console.log("yep");
$(document).ready(onLoad);
