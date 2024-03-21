
function DocPage(heading, content) {
    this.heading = heading;
    this.content = content;
    this.fillElements = function(heading, content) {
        heading.innerHTML = this.heading;
        content.innerHTML = this.content;
    };
}

/**
 * ```html
 * <p>{innerHTML}</p>
 * ```
 */
function paragraph(innerHTML) {
    return `<p>${innerHTML}</p>`;
}
/**
 * ```html
 * <p>{innerHTML}</p>
 * ```
 */
const p = paragraph;

/**
 * ```html
 * <a href="{href}">{innerHTML}</a>
 * ```
 */
function anchor(href, innerHTML) {
    return `<a href="${href}">${innerHTML}</a>`;
}
/**
 * ```html
 * <a href="{href}">{innerHTML}</a>
 * ```
 */
const a = anchor;

/**
 * ```html
 * <button 
 *     onclick="window.open({href}, _self); window.location.reload();" 
 *     class="link">
 *         {innerHTML}
 * </button>
 * ```
 */
function buttonLink(href, innerHTML, id = null) {
    return `<button ${id != null ? `id="${id}"` : ""} onclick="reloadOpen('${href}')" class="link">${innerHTML}</button>`;
}

/** 
 * ```html
 * <i>{innerHTML}</i>
 * ```
*/
function italics(innerHTML) {
    return `<i>${innerHTML}</i>`
}
/** 
 * ```html
 * <i>{innerHTML}</i>
 * ```
*/
const i = italics;

/** 
 * ```html
 * <i class="fa fa-{faType} {symbolClass}"></i>
 * ```
*/
function fa_i(faType, symbolClass) {
    return `<i class="fa fa-${faType} ${symbolClass}"></i>`
}

/**
 * ```html
 * <ul>{innerHTML}</ul>
 * ```
 */
function ulist(innerHTML) {
    return `<ul>${innerHTML}</ul>`;
}
/**
 * ```html
 * <ul>{innerHTML}</ul>
 * ```
 */
const ul = ulist;

/**
 * ```html
 * <li>{innerHTML}</li>
 * ```
 */
function listItem(innerHTML) {
    return `<li>${innerHTML}</li>`;
}
/**
 * ```html
 * <li>{innerHTML}</li>
 * ```
 */
const li = listItem;

/**
 * ```html
 * <code class="inline">{innerHTML}</code>
 * ```
 */
function codeInline(innerHTML) {
    return `<code class="inline">${innerHTML}</code>`;
}
/**
 * ```html
 * <code class="inline">{innerHTML}</code>
 * ```
 */
const c = codeInline;

/**
 * ```html
 * <pre>
 *     <code class="block">{innerHTML}</code>
 * </pre>
 * ```
 */
function codeBlock(innerHTML) {
    return `<pre><code class="block">${innerHTML}</code></pre>`;
}
/**
 * ```html
 * <pre>
 *     <code class="block">{innerHTML}</code>
 * </pre>
 * ```
 */
const code = codeBlock;

/**
 * ```html
 * <br />
 * ```
 * 
 * Repeated `repeat` times.
 */
function lineBreak(repeat = 1) {
    return "<br />" * repeat;
}
/**
 * ```html
 * <br />
 * ```
 * 
 * Repeated `repeat` times.
 */
const br = lineBreak;

function reloadOpen(href, target = "_self") {
    window.open(href, target);
    window.location.reload();
}

function arrayToContent(array) {
    return array.join('\n\n');
}

function getSubstringAfterString(targetString, splitterString) {
    return targetString.slice(targetString.indexOf(splitterString) + 1)
}

function getSubstringBeforeString(targetString, splitterString) {
    return targetString.slice(0, targetString.indexOf(splitterString))
}

const pages = {
    "invalid": new DocPage(
        "invalid page",
        "invalid page: please enter a valid page name (after the `#` character in the URI string"
    ),
    "type.Skill": new DocPage(codeInline("Skill"), arrayToContent([
        paragraph("The " + c("Skill") + " type."),
        code(
`class Skill {
    constructor(skill: string, description: string)
}`
        ),
    ])),
    "function.calculate_age": new DocPage(codeInline("calculate_age"), arrayToContent([
        paragraph("The " + c("calculate_age") + " function."),
        code(
`function calculate_age(birthday: Date) {
    // SET CURRENT RELATIVE DATES
    // SET INDIVIDUAL PARTS OF THE BIRTHDAY; YEAR, MONTH & DAY
    // INCREMENT THE YEAR IF AFTER THE BIRTHDAY DATE
    // CALCULATE DIFFERENCE FROM BIRTH TO NOW
    // RETURN THE AGE AS OBJECT:
    return {
        ageInYears: yearDifference.toString(),
        fullAge: \`\${yearDifference} years, &dollar;{monthDifference} months, and &dollar;{dateDifference} days\`,
        ageParts: {
            year: yearDifference,
            month: monthDifference,
            date: dateDifference,
        },
    };
}`
        ),
    ])),
};

const quicknav = document.getElementById("quick-nav");

const page    = document.getElementById("page");
const heading = document.getElementById("page-heading");
const content = document.getElementById("page-content");

const querySeparationCharacter = "#";

const pageName = getSubstringAfterString(window.location.href, querySeparationCharacter);

if (pageName.includes("/docs") || pageName === "") {
    let items = "";
    for (const key in pages) {
        if (key === "invalid") { continue; }
        items += li(
            buttonLink(
                querySeparationCharacter + key,
                c(key),
            )
        ) + "\n";
    }
    page.innerHTML = ul(items);
} else {
    if (pageName in pages) {
        pages[pageName].fillElements(heading, content);
    } else {
        pages["invalid"].fillElements(heading, content);
    }
    quicknav.innerHTML = buttonLink(
        "index.html#",
        fa_i("solid", "fa-caret-left") + " " + i("Back Home"),
        "back-home",
    );
    page.innerHTML += "\n" + p("Current Documentation Page: " + c(pageName));
}
