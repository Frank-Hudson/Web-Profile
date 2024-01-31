// MODES
//     // Use *.html files (works fine locally)
//     FILE: 1
//     // Use /*/ folders and indexes (requires server)
//     PATH: 0
//
// MODE = MODES.*

// ----- \\

const skills = [
    "Python is an easy-to-understand high-level programming language often used in data science, as well as for general scripting.",
    "C++ is a low-level programming language that is used in computer science, engineering, and some other fields.",
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
