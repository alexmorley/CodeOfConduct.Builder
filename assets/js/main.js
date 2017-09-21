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
        $.each(json_obj.unacceptable_behaviour.list, function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");      
            $("#badlist").append($li);            
        });

        $("#goodlist").empty();
        $.each(json_obj.encouraged_behaviour.list, function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");      
            $("#goodlist").append($li);            
        });

        $("#reporting").empty();
        $.each(json_obj.reporting.howto, function( i, point ) {
           var $li = $("<li><a>"+point+"</a></li>");
           $("#reporting").append($li);
        }); 
    });

    $('#event-name').on('input', function() {
        console.log(this.value);
        $('#your-title').text(this.value + '\'s Code of Conduct');
    });

    $("#ext_selector").on('change', function () {
        console.log("clicked");
        var text = $("#rightFrame").html();
	    var ext_info = $("#ext_selector option:selected").val();
        var id_info = CRC32.str(text); 
        $("#id").val(id_info);
        var url = "save.php";
        console.log(ext_info);
	$.post(url, 
		{ext: ext_info,
		rightFrame: text,
        id: id_info
		}, function () {
            //$("#textArea").css("background", "#ccc").prop("contenteditable", false);
            console.log(text.length + " characters sent to server. Hash: " + id_info + "Ext: " + ext_info);
        });
    }); 
}
console.log("yep");
$(document).ready(onLoad);
