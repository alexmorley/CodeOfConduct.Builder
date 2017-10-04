function onLoad() {
    $('#coc-base').on('change', function() {
        var selectedBase = $('#coc-base option:selected').val();
        console.log(selectedBase);
        var json_obj;
        $.ajax({
            url: "resources/"+selectedBase+".json",
            dataType: "json",
            async: false,
            success: function(response) {
                json_obj = response;
            }
        })        
        console.log("Read attempted");
        $('#sub-title').text(json_obj["title"]);

        $("#badlist").empty();
        if (json_obj.unacceptable_behaviour == null){
            $("#badList").append($("<li><a>[The selected Code of Conduct doesn't include Unacceptable Behaviour]</a></li>"));
        }
        else{
            $.each(json_obj.unacceptable_behaviour.list, function( i, point ) {
                var $li = $("<li><a>"+point+"</a></li>");      
                $("#badlist").append($li);            
            });
        }
        
        $("#goodlist").empty();
        if (json_obj.encouraged_behaviour == null){
            $("#goodlist").append($("<li><a>[The selected Code of Conduct doesn't include Encouraged Behaviour]</a></li>"));
        }
        else{
            $.each(json_obj.encouraged_behaviour.list, function( i, point ) {
                var $li = $("<li><a>"+point+"</a></li>");      
                $("#goodlist").append($li);            
            });
        }

        $("#reporting").empty();
        if (json_obj.reporting.howto == null){
            $("#reporting").append($("<li><a>[The selected Code of Conduct doesn't include Reporting Violations]</a></li>"));
        }
        else{
            $.each(json_obj.reporting.howto, function( i, point ) {
                var $li = $("<li><a>"+point+"</a></li>");
                $("#reporting").append($li);
            });
        }
    });

    $('#event-name').on('input', function() {
        $('#your-title').text(this.value + '\'s Code of Conduct');
    });

    $("#rightFrame").on('input', function() {
        $("#ext_selector").val("none");
    }); 

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
                        console.log(text.length + " characters sent. Hash: " + id_info + "Ext: " + ext_info);
                    });
        }
    });

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
        }, 100); /* Non-Firefox browsers need a delay or they print a blank page */

        return false;
    });
}

console.log("yep");
$(document).ready(onLoad);
