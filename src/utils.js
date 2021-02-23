function calculateAgeInYears(date) {
    var now = new Date();
    var current_year = now.getFullYear();
    var year_diff = current_year - date.getFullYear();
    var birthday_this_year = new Date(current_year, date.getMonth(), date.getDate());
    var has_had_birthday_this_year = (now >= birthday_this_year);

    return has_had_birthday_this_year
        ? year_diff
        : year_diff - 1;
}

export {calculateAgeInYears}