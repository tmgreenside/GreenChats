exports.checkRegisterData = function(body) {
    if (body.passEntry1 !== body.passEntry2
    || body.firstname === "" || body.lastname === ""
    || body.email === "") {
        return false;
    }
    else if (validateDate(body.birthMonth, body.birthDay, body.birthYear) === false) {
        return false;
    }
    return true;
}

function validateDate(monthIn, dayIn, yearIn) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
                    "September", "October", "November", "December"];
    var monthValid = false;
    for (var month in months) {
        if (month == monthIn) {
            monthValid = true;
        }
    }

    if (dayIn < 0 || dayIn > 31) {
        return false;
    }
    return true;
}
