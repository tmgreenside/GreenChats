var progressTimeout = null;

function submitSearchRequest() {
    var resultField = $('#searchResults');
    var searchParams = $("#searchPages").val();
    if (searchParams === "") {
        resultField.empty();
        return;
    }
    $.ajax({
		type: "POST",
        data: {
            'searchParams': searchParams
        },
        url: "/searchFriends",
        success: function(data) {
            $('#searchResults').empty();
            if (data == "No results.") {
                $('#searchResults').html("<h5>No results.</h5>");
            }
            else {
                var appendString;
                for (var i in data) {
                    appendString = '<div class="searchResult"><a href="/profile?id=' + data[i]['id'];
                    appendString += '">' + data[i]['firstname'] + " " + data[i]['lastname'] + "</a></div>";
                    $('#searchResults').append(appendString);
                }
            }
        }
    });
}

$(document).ready(function() {
    $('#searchPages').on("keydown paste", function() {
		if (progressTimeout) {
			clearTimeout(progressTimeout);
		}
		progressTimeout = setTimeout(submitSearchRequest, 500);
	});
});
