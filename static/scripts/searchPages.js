var progressTimeout = null;

function submitSearchRequest() {
    var searchParams = $("#searchPages").val();
    
}

$(document).ready(function() {
    $('#searchPages').on("keydown paste", function() {
		if (progressTimeout) {
			clearTimeout(progressTimeout);
		}
		progressTimeout = setTimeout(submitSearchRequest, 500);
	});
}
