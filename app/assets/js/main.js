function onLoad() {
    $('#coc-base').on('change', async function() {
        var selectedBase = $('#coc-base option:selected').val();
        console.log(selectedBase);

        const response = await fetch("resources/"+selectedBase+".json");
        const json_obj = await response.json();

        console.log("Read attempted");

        const editor = tinymce.editors[0];
        const $conductDocument = $(editor.getBody());

        $conductDocument.find('#sub-title').text(json_obj["title"]);


        $conductDocument.find("#badlist").empty();
        $.each(json_obj.unacceptable_behaviour.list, function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");
            $conductDocument.find("#badlist").append($li);
        });

        $conductDocument.find("#goodlist").empty();
        $.each(json_obj.encouraged_behaviour.list, function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");
            $conductDocument.find("#goodlist").append($li);
        });

        $conductDocument.find("#reporting").empty();
        $.each(json_obj.reporting.howto, function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");
            $conductDocument.find("#reporting").append($li);
        });
    });

    $('#event-name').on('input', function() {
        $('#your-title').text(this.value + '\'s Code of Conduct');
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
}
console.log("yep");
$(document).ready(onLoad);
