var progressTimeout = null;

function submitSearchRequest() {
    alert("Function call successful");
    // var searchParams = $("#searchPages").val();
    // $.ajax({
	// 	type: "POST",
    //     data: {
    //         'searchParams': searchParams
    //     },
    //     success: function(data) {
    //         $('#searchResults').html(data);
    //     }
    // });
}

$(document).ready(function() {
    $('#searchPages').on("keydown paste", function() {
        alert("Thing is typed");
		if (progressTimeout) {
			clearTimeout(progressTimeout);
		}
		progressTimeout = setTimeout(submitSearchRequest, 500);
	});
}
