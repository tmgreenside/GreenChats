var progressTimeout = null;

function submitSearchRequest() {
    
}

$(document).ready(function() {
    $('#searchPages').on("keydown paste", function() {
		if (progressTimeout) {
			clearTimeout(progressTimeout);
		}
		progressTimeout = setTimeout(submitSearchRequest, 500);
	});
}
