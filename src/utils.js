function calculateAgeInYears(date) {
    /**
     * Used in user registration.
     * @type {Date}
     */
    var now = new Date();
    var current_year = now.getFullYear();
    var year_diff = current_year - date.getFullYear();
    var birthday_this_year = new Date(current_year, date.getMonth(), date.getDate());
    var has_had_birthday_this_year = (now >= birthday_this_year);

    return has_had_birthday_this_year
        ? year_diff
        : year_diff - 1;
}

function loadImageBase64(element, callback) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        callback(reader.result);

    }

    reader.readAsDataURL(file);
}

export {calculateAgeInYears, loadImageBase64}