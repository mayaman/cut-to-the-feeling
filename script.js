const what = ["everything", "nothing"];
const adjectives = ["wrong", "right", "real", "fake"];
const string = "I do is";
let currentPhrase = 0;
let newString = "";
let currentStringIndex = 0;
let currentString = "";
let div;
let allText = [];
let mode = "typing";
let deleteIndex = 0;
let currentDeleteIndex = 0;
let width = window.innerWidth;
let height = window.innerHeight;
let typeSizeMin = 12;
let typeSizeMax = 88;
let deleteMode = false;

let currentAltIndex = 0;

console.log("\n\n\nhttps://www.tiktok.com/@i_love_tiktok__47/video/7167470101640318254?\n\n\n\n" + what[Math.floor(Math.random() * what.length)] + "\n\n\n\n\n\n\n\n\n\n" + string + "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + adjectives[Math.floor(Math.random() * adjectives.length)] + "\n\n\n\nhttps://www.instagram.com/p/BnejiFzALno/\n\n\n");
console.log("★.｡.:*☆:**:. ⓦ𝕖𝓑s𝕚𝓉𝐄 Ｂʸ 𝓶ⓐ𝐲ᗩ 𝐌𝕒𝓝 .:**:.☆*.:｡.★ ♡ www.mayaontheinter.net ♡ 萬美亞");


// div = document.createElement("div");


// chooseNewMode();
// setTypeSize();


let paragraphStructure = [
    {
        phrase: "I pledge",
        alts: []
    },
    {
        phrase: "allegience",
        alts: ["loyalty", "faithfulness", "obedience", "fidelity"]
    },
    {
        phrase: "to the",
        alts: []
    },
    {
        phrase: "flag",
        alts: ["banner", "colors", "symbol", "emblem"]
    },
    {
        phrase: "of the",
        alts: []
    },
    {
        phrase: "United",
        alts: ["Integrated", "Consolidated", "Amalgamated", "Joint"]
    },
    {
        phrase: "States of America and to the Republic for which it",
        alts: []
    },
    {
        phrase: "stands",
        alts: ["perches", "hangs", "dies", "lives", "fucks"]
    },
    {
        phrase: ", one nation under",
        alts: []
    },
    {
        phrase: "God",
        alts: ["Capitalism", "The One and Only", "Buddha", "Bella Hadid"]
    },
    {
        phrase: ".",
        alts: ["!!!", "<3>", "xoxoxo", "THE END"]
    },
];

let paragraph = ["I pledge", "allegience", "to the", "flag", "of the", "United", "States of America and to the Republic for which it", "stands", "one nation under", "God", "indivisible", "with", "liberty", "and", "justice", "for", "all", "."]
let currentParagraph = "";

let alting = false;

let addedString = "";


window.addEventListener("resize", onWindowResize);


div = document.getElementById("text");
div.classList.add("text");
renderText();
function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
}

function setTypeSize() {
    if (width >= 4000) {
        // 4K
        typeSizeMin = 64;
        typeSizeMax = 248;
    } else if (width > 2000) {
        // TV SIZE
        typeSizeMin = 48;
        typeSizeMax = 111;
    } else if (width > 820) {
        // DESKTOP
        typeSizeMin = 12;
        typeSizeMax = 77; // 48
    } else {
        // MOBILE
        typeSizeMin = 12;
        typeSizeMax = 24;
    }
}


function renderText() {
    let interval = 100;

    if (currentStringIndex <= paragraphStructure[currentPhrase].phrase.length) {
        if (alting) {
            interval = 1000;
            addedString = paragraphStructure[currentPhrase].alts[currentAltIndex];
            currentAltIndex++;
        } else {
            addedString = paragraph[currentPhrase].substring(0, currentStringIndex);
            currentStringIndex++;
        }

        div.innerText = currentParagraph + " " + addedString;

        if (alting && currentAltIndex >= paragraphStructure[currentPhrase].alts.length) {
            // Stop alt-ing
            console.log("hello STOPPPP")
            alting = false;
            currentAltIndex = 0;
            addedString = paragraph[currentPhrase].substring(0, currentStringIndex);
            currentStringIndex = 0;
            currentPhrase++;
            currentParagraph = currentParagraph + " " + addedString;
        } else if (currentStringIndex >= paragraphStructure[currentPhrase].phrase.length && !alting) {
            // End of that string

            if (paragraphStructure[currentPhrase].alts.length > 0 && !alting) {
                // Cycle through alts
                alting = true;
            } else {
                addedString = paragraph[currentPhrase].substring(0, currentStringIndex);
                currentStringIndex = 0;
                currentPhrase++;
                currentParagraph = currentParagraph + " " + addedString;

                if (currentPhrase >= paragraph.length) {
                    // End of whole thing I think
                    currentPhrase = 0;
                }
            }
        }
    }

    // if (mode == "typing") {
    //     if (currentStringIndex <= paragraph.length) {
    //         div.innerText = paragraph.substring(0, currentStringIndex);
    //         currentStringIndex++;
    //     } else {
    //         currentStringIndex = 0;
    //         chooseNewMode();
    //     }
    // } else { // Deleing
    //     let deleteDiv = allText[deleteIndex];
    //     let currentText = deleteDiv.innerText;

    //     if (currentDeleteIndex >= 0) {
    //         deleteDiv.innerText = currentText.substring(0, currentDeleteIndex);
    //         currentDeleteIndex--;
    //     } else {
    //         allText.splice(deleteIndex, 1);
    //         chooseNewMode();
    //     }

    // }


    setTimeout(() => {
        renderText();
    }, interval);
}

function chooseNewMode() {
    let percentChangeDelete = 0.26;
    // if (allText.length > 20) {
    //     deleteMode = true;
    // }

    // if (deleteMode && allText.length <= 1) {
    //     deleteMode = false;
    // }

    // if (deleteMode) {
    //     percentChangeDelete = 0.74;
    // }

    // if ((randomBool(percentChangeDelete) && allText.length > 0)) {
    //     mode = "deleting";
    // } else {
    //     mode = "typing";
    // }

    if (mode == "typing") {
        newString = what[Math.floor(Math.random() * what.length)] + " " + string + " " + adjectives[Math.floor(Math.random() * adjectives.length)];
        const newFontSize = typeSizeMin + Math.random() * typeSizeMax;

        // div = document.createElement("div");
        // div.classList.add("text");
        let widthPadding = 0.05;
        // if (randomBool(0.2)) {
        //     div.classList.add("italic");
        //     widthPadding = newFontSize * 0.2;
        // }

        // Test to calculate height / width
        const testDiv = document.createElement("div");
        const testContent = document.createTextNode(newString);
        testDiv.appendChild(testContent);
        testDiv.style.fontSize = newFontSize + "px";
        testDiv.style.visibility = "hidden";
        testDiv.classList.add("text");
        testDiv.id = "test";
        document.getElementById("wrapper").appendChild(testDiv);

        const maxHeight = height - testDiv.clientHeight - newFontSize;
        const maxWidth = width - testDiv.clientWidth - widthPadding;
        testDiv.remove();

        div.style.top = Math.random() * maxHeight + "px";
        div.style.left = Math.random() * maxWidth + "px";
        div.style.fontSize = newFontSize + "px";
        div.style.textShadow = "0 0 " + (newFontSize / 16) + "px #000000";
        allText.push(div);
    } else {
        deleteIndex = Math.floor(Math.random() * allText.length);
        currentDeleteIndex = allText[deleteIndex].innerText.length;
    }
}

function randomBool(percentChanceTrue) {
    return (Math.random() < percentChanceTrue);
}