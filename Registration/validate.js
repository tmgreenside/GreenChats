var months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

exports.checkRegisterData = function(body) {
    if (body.passEntry1 !== body.passEntry2
    || body.firstname === "" || body.lastname === ""
    || body.email === "" || (body.genderSelect !== "Male"
    && body.genderSelect !== "Female")) {
        return false;
    }
    else if (validateDate(body.birthMonth, body.birthDay, body.birthYear) === false) {
        return false;
    }
    return true;
}

exports.parseDate = function(body) {
    var dateString = "";
    for (var i = 0; i < months.length; i++) {
        if (months[i] == body.birthMonth) {
            monthNum = i+1
            dateString = monthNum.toString();
            break;
        }
    }
    dateString = dateString.concat("-" + body.birthDay + "-" + body.birthYear);
    return dateString;
}

function validateDate(monthIn, dayIn, yearIn) {
    var monthValid = false;
    for (var month in months) {
        if (month == monthIn) {
            monthValid = true;
            break;
        }
    }

    if (isNaN(dayIn) || dayIn < 0 || dayIn > 31) {
        return false;
    }

    if (isNaN(yearIn)) return false;

    return true;
}
