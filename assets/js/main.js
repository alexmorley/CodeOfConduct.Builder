function onLoad() {
	//$('#code-generator').hide(); 
	$('#coc-base').on('click', function() {
		var selectedBase = $('#coc-base option:selected').val();
		var json_obj;
		$.ajax({
		  url: "resources/ContributorCovenant.json",
		  dataType: "json",
		  async: false,
		  success: function(response) {
		  	json_obj = response;
		  }
		  })        

		$('#base-text').text(json_obj["Title"]);
	});
}

$(document).ready(onLoad);

