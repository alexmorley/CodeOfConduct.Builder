function onLoad() {
    //$('#rightFrame').hide(); 
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
        $('#sub-title').text(json_obj["Title"]);

        // $('#encouragedBehaviours'.text(
        
        $("#linkList").empty();
        $.each(json_obj.UnacceptableBehaviour.list, function( i, point ) {
            var $li = $("<li><a>"+point+"</a></li>");      
            $("#linkList").append($li);            
        });
    });
}
console.log("yep");
$(document).ready(onLoad);
