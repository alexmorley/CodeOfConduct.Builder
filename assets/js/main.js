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

    });

    $('#event-name').on('input', function() {
        console.log(this.value);
        $('#your-title').text(this.value + '\'s Code of Conduct');
    });
}
console.log("yep");
$(document).ready(onLoad);
