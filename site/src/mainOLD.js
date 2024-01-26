// MODES
//     // Use *.html files (works fine locally)
//     FILE: 1
//     // Use /*/ folders and indexes (requires server)
//     PATH: 0
//
// MODE = MODES.*

// ----- \\

const skills = [
    new Skill(
        "Python",
        "Software Development & Scripting",
        "Python is an easy-to-understand high-level programming language often used in data science, as well as for general scripting."
    ),
    new Skill(
        "Rust",
        "Software Development",
        "Rust is a relatively high-level programming language with the rare (for a high-level language) ability to somewhat safely interact with more low-level parts of the computer, like memory management."
    ),
    new Skill(
        "HTML",
        "Frontend Development",
        "HTML, or HyperText Markup Lanuage, is the language that  creates the structure of most pages on the web."
    ),
    new Skill(
        "CSS",
        "Frontend Development",
        "CSS (Cascading Style Sheets) is used to style HTML pages."
    ),
    new Skill(
        "JavaScript",
        "Frontend & Backend Development",
        "JavaScript is the primary programming language used in most websites."
    ),
    new Skill(
        "C++",
        "Low-level Development",
        "C++ is a low-level programming language that is used in computer science, engineering, and some other fields."
    ),
];

const portfolio = new Portfolio(
    [
        new Product(
            "Advertisement (Photoshop)",
            "Graphics",
            "An advertisement for a smart phone."
        ),
        new Product(
            "User Guide (Illustrator)",
            "Graphics",
            "A user guide for a smart phone."
        ),
        new Product(
            "Promotional Video (Premiere Pro)",
            "Multimedia",
            "A promotional video for a band."
        ),
        new Product(
            "Promotional Website (Dreamweaver, Visual Studio Code)",
            "Multimedia",
            "A promotional website for a band."
        ),
    ],
    [
        new Project(
            "First Database (Microsoft Access)",
            new Date(2023, 3, 29),
            "My first Database, for an imaginary doctor's surgery. Created using Microsoft Access."
        ),
        new Project(
            "First Program (Visual Studio 2019)",
            new Date(2023, 5, 4),
            'My first Program - a virtual version of the popular game "Rock, Paper, Scissors", AKA "Rochambeau". Created using Visual Studio 2019 with VBA.NET.'
        ),
        new Project(
            "Portfolio Website (Visual Studio Code)",
            new Date(2023, 6, 18),
            "My first portfolio website, and only prior to this one. Created using Visual Studio Code."
        ),
    ]
);

const interests = [
    new Interest(
        "Gaming",
        "I like playing mainly open-world and sandbox games, with most games with a " +
            "beatable campaign coming second. Now, I understand those may seem like very" +
            " large categories, and you're right. I will not elaborate."
    ),
];

// ----- \\

function stripHost() {
    const url = window.location.href;
    console.log(url);
    const splitString = url.split("/");
    console.log(splitString);
    const substring = splitString[splitString.length - 2];
    return substring;
}

function getDepthRelativePathModifier(fromDepth1, toDepth2) {
    if (fromDepth1 < toDepth2 || fromDepth1 == toDepth2) {
        return "./";
    } else {
        return "../".repeat(fromDepth1 - toDepth2);
    }
}

// ----- \\

function renderNav(container) {
    const currentPage = stripHost();

    const navString =
        renderNavA(PAGE.INDEX, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.KNOWLEDGE, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.SKILLS, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.PORTFOLIO, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.PORTFOLIO_PRODUCTS, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.PORTFOLIO_PROJECTS, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.INTERESTS, pagePathMap.get(currentPage)) +
        renderNavA(PAGE.CONTACT, pagePathMap.get(currentPage));

    container.innerHTML = navString;
}
