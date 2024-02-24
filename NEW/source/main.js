
/**
 * A function to calculate your age based solely on your birth date.
 * 
 * 
 * 
 * @param {Date} birthday 
 */
function calculate_age(birthday) {
    // SET CURRENT RELATIVE DATES

    /**
     * The current Date
     */
    const today = new Date();
    /**
     * The current year, based on the current Date
     */
    const yearNow = today.getUTCFullYear() - 1;
    /**
     * The current month, based on the current Date
     */
    const monthNow = today.getMonth() + 1;
    /**
     * The previous month, based on the current month
     */
    const lastMonth = monthNow - 1;
    /**
     * The current day of the month, based on the current Date
     */
    const dateNow = today.getDate();

    /**
     * Get the length of February in the current year.
     * 
     * @param {number} year 
     */
    function getLengthOfFebruary(year) {
        if (new Date(year, 1, 29).getDate() === 29) {
            return 29;
        } else {
            return 28;
        }
    }

    /**
     * All the months mapped to their corresponding lengths.
     */
    const monthLengthsMap = new Map([
        [1, 31],
        [2, getLengthOfFebruary(yearNow)],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31],
    ]);

    // SET INDIVIDUAL PARTS OF THE BIRTHDAY; YEAR, MONTH & DAY RESPECTIVELY
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDate = birthday.getDate();

    // INCREMENT THE YEAR AFTER THE BIRTHDAY DATE IF 
    if (
        (monthNow == birthMonth && dateNow >= birthDate) ||
        monthNow > birthMonth
    ) {
        yearNow++;
    }

    // CALCULATE DIFFERENCE FROM BIRTH TO NOW
    let yearDifference = yearNow - birthYear;
    let monthDifference = monthNow - birthMonth;
    let dateDifference = dateNow - birthDate - 1;

    if (monthDifference < 1) {
        monthDifference += 12;
    }
    if (dateDifference < 1) {
        monthDifference--;
    }
    if (dateDifference < 0) {
        dateDifference += monthLengthsMap.get(lastMonth);
    }

    // RETURN AGE AS OBJECT
    return {
        ageInYears: yearDifference.toString(),
        fullAge: `${yearDifference} years, ${monthDifference} months, and ${dateDifference} days`,
        ageParts: {
            year: yearDifference,
            month: monthDifference,
            date: dateDifference,
        },
    };
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function weekday_name(weekdayIndex) {
    const weekdayNamesMap = new Map([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
    ]);

    function fixWeekdayIndex(weekdayIndex) {
        if (weekdayIndex > 6) {
            return fixWeekdayIndex(weekdayIndex - 7);
        } else if (weekdayIndex < 0) {
            return fixWeekdayIndex(weekdayIndex + 7);
        } else {
            return weekdayIndex;
        }
    }

    const workableWeekdayIndex = fixWeekdayIndex(weekdayIndex);
    return weekdayNamesMap.get(workableWeekdayIndex);
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function to_top() {
    const toTopButton = document.getElementById("to-top");

    toTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function on_scroll() {
    window.onscroll = function () {
        to_top_update();
        fix_navigation();
    };
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function to_top_update() {
    const toTopButton = document.getElementById("to-top");

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

// function fix_navigation() {
//     const header = document.getElementById("header");
//     const headerHeight = header.offsetHeight;
//     const nav = document.getElementById("nav");
//     const navHamburgerButton = document.getElementsByClassName(
//         "hamburger-menu"
//     )[0];

//     fixCondition: if (window.scrollY > headerHeight) {
//         nav.style.position = "fixed";
//         nav.style.top = 0;
//         // nav.style.width = "16.66%";

//         if (!navHamburgerButton) break fixCondition;

//         navHamburgerButton.style.position = "fixed";
//         navHamburgerButton.style.top = "var(--hamburger-margin)";
//     } else {
//         nav.style.position = "absolute";
//         nav.style.top = headerHeight + "px";
//         nav.style.width = "100%";

//         if (!navHamburgerButton) break fixCondition;

//         navHamburgerButton.style.position = "absolute";
//         navHamburgerButton.style.top =
//             "calc(var(--hamburger-margin) + var(--header-height))";
//     }
// }

////////////////////////////////////////////////////////////////////////////////

function main() {
    
}

main();
