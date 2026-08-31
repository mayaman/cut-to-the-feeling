let div;
let width = window.innerWidth;
let height = window.innerHeight;

var text = 
    "I had a dream, or was it real?" +
	" We crossed the line and it was on" +
	" We crossed the line, it was on this time" +
	" I've been denying how I feel, you've been denying what you want" +
	" You want from me, talk to me, baby" +
	" I want some satisfaction, take me to the stars" +
	" Just like ah-ah-ah, ah-ah-ah" +
	" I wanna cut through the clouds, break the ceiling" +
	" I wanna dance on the roof, you and me alone" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut to the feeling, oh yeah (woo)" +
	" I wanna play where you play with the angels" +
	" I wanna wake up with you all in tangles, oh" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut to the feeling, oh yeah" +
	" Cancel your reservations, no more hesitations this is on" +
	" Can't make it stop, give me all you got" +
	" I want it all or nothing, no more in between, now give your" +
	" Everything to me, let's get real, baby" +
	" A chemical reaction, take me in your arms" +
	" And make me (hey) ah-ah-ah, ah-ah-ah" +
	" I wanna cut through the clouds, break the ceiling" +
	" I wanna dance on the roof, you and me alone" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut to the feeling, oh yeah (woo)" +
	" I wanna play where you play with the angels" +
	" I wanna wake up with you all in tangles, oh" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut to the feeling, oh yeah" +
	" Take me to emotion (hey), I want to go all the way (all the way)" +
	" Show me devotion and take me all the way" +
	" Take me to emotion, I want to go all the way" +
	" Show me devotion and take me all the way (all the way, all the way, all the way)" +
	" Take me, take me, take me all the way, ah-ah-ah" +
	" I wanna cut through the clouds, break the ceiling" +
	" I wanna dance on the roof, you and me alone" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut to the feeling, oh yeah (yeah, yeah, yeah)" +
	" I wanna play where you play with the angels" +
	" I wanna wake up with you all in tangles, oh" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut to the feeling, oh yeah" +
	" I wanna cut through the clouds (mmm, cut to the feeling)" +
	" I wanna dance on the roof (oh, yeah)" +
	" I wanna cut to the feeling (I wanna cut to the feeling)" +
	" I wanna cut to the feeling (I wanna cut to the feeling)";
 
const lyrics = text
  .replace(/[()]/g, "")
  .match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g);

let shuffledLyrics = shuffleLyrics(lyrics);
console.log("\n\n\nhttps://www.youtube.com/watch?v=Qlsu7RhOnsQ\n\n\n\n");

for (let i = 0; i < lyrics.length; i++) {
    console.log("\n\n\n" + lyrics[i] + "\n\n\n");
}

console.log("★.｡.:*☆:**:. ⓦ𝕖𝓑s𝕚𝓉𝐄 Ｂʸ 𝓶ⓐ𝐲ᗩ 𝐌𝕒𝓝 .:**:.☆*.:｡.★ ♡ www.mayaontheinter.net ♡ 萬美亞");

window.addEventListener("resize", onWindowResize);


div = document.getElementById("text");
div.classList.add("text");
renderText();

function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
}

function shuffleLyrics(sourceLyrics) {
    const shuffled = [...sourceLyrics];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }

    return shuffled;
}

function getNextLyric() {
    if (shuffledLyrics.length === 0) {
        shuffledLyrics = shuffleLyrics(lyrics);
    }

    return shuffledLyrics.pop();
}

function renderText() {
    let interval = 50 + (Math.random() * 400);
    // interval = 200;

    let newLyric = getNextLyric().toLowerCase();
    if (newLyric == 'i') {
        newLyric = 'I';
    }
    div.innerText = newLyric;

    setTimeout(() => {
        renderText();
    }, interval);
}
