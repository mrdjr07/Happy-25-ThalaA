const loadingMessages = [

"🎨 Gathering art supplies...",

"🖍️ Sharpening pencils...",

"🌸 Preparing birthday magic...",

"🐹 Looking for the capybara...",

"🎁 Wrapping your surprise...",

"✨ Adding extra happiness...",

"💖 Almost ready..."

];

const finalMemories = [

    "Images/Memories/1.jpg",
    "Images/Memories/2.jpg",
    "Images/Memories/113.jpg",
    "Images/Memories/114.jpg",
    "Images/Memories/3.jpg",
    "Images/Memories/4.jpg",
    "Images/Memories/5.jpg",
    "Images/Memories/7.jpg",
    "Images/Memories/103.jpg",
    "Images/Memories/157.jpg",
    "Images/Memories/158.jpg",
    "Images/Memories/159.jpg",
    "Images/Memories/160.jpg",
    "Images/Memories/164.jpg",
    "Images/Memories/165.jpg"

];

// =========================
// 🔊 SOUND MANAGER
// =========================

const sounds = {

    loading: new Audio("Sounds/Loading.mp3"),

    typing: new Audio("Sounds/Typing.mp3"),

    verification: new Audio("Sounds/Verification.mp3"),

    button: new Audio("Sounds/Button.mp3"),

    finally: new Audio("Sounds/Finally.mp3"),

    magical: new Audio("Sounds/Magical.mp3"),

    boom: new Audio("Sounds/Boom.mp3"),

    birthday: new Audio("Sounds/Birthday.mp3"),

    camera: new Audio("Sounds/Camera.mp3"),
    
lose: new Audio("Sounds/Lose.mp3"),
win: new Audio("Sounds/Win.mp3"),

};

let memoryPaused = false;

let pauseStart = 0;

let birthdayMusic =
    sounds.birthday;

let audioUnlocked = false;

let birthdayScreen;
let fadeLayer;
let balloonTimer;
let sparkleTimer;

Object.values(sounds).forEach(sound => {
    sound.preload = "auto";
    sound.load();
});

function unlockAudio() {

    if (audioUnlocked) return;

    audioUnlocked = true;

    Object.values(sounds).forEach(sound => {

        sound.volume = 0;

        sound.play().then(() => {

            sound.pause();
            sound.currentTime = 0;

        }).catch(() => {});

    });

    sounds.button.volume = 0.7;

}

function playSound(sound, volume = 1) {

    sound.pause();
    sound.currentTime = 0;
    sound.volume = volume;

    sound.play()
        .then(() => {
            console.log("✅ Sound Played");
        })
        .catch(err => {
            console.log("Error Name:", err.name);
            console.log("Error Message:", err.message);
        });

}

function stopSound(sound) {

    sound.pause();
    sound.currentTime = 0;

}



document.getElementById("loadingText").innerHTML=

loadingMessages[Math.floor(Math.random()*loadingMessages.length)];



let bar=document.getElementById("bar");

let percent=document.getElementById("percent");

let loading=document.getElementById("loadingScreen");

let welcome=document.getElementById("welcomeScreen");



let title=document.getElementById("title");

let subtitle=document.getElementById("subtitle");

let question = document.getElementById("questionScreen");

let yesBtn = document.getElementById("yesBtn");

let noBtn = document.getElementById("noBtn");


let value = 0;

function startLoading() {

    playSound(sounds.loading, 0.5);

    value = 0;

    bar.style.width = "0%";
    percent.innerHTML = "0%";

    let timer = setInterval(function () {

        value++;

        bar.style.width = value + "%";
        percent.innerHTML = value + "%";

        if (value == 100) {

            clearInterval(timer);

            loading.style.display = "none";
            
            stopSound(sounds.loading);

            welcome.style.display = "flex";

            typeWriter(
                "Hi ✨<br>ThalaAAAAA...",
                "I made something for you&nbsp;🫀"
            );

        }

    }, 35);

}

function typeWriter(text1,text2){
  
  console.log("Typing function started");
setTimeout(() => {

    playSound(sounds.typing, 0.4);

}, 100);

let i=0;

let j=0;



let first=setInterval(function(){

title.innerHTML=text1.substring(0,i);

i++;



if(i>text1.length){

clearInterval(first);



let second=setInterval(function(){

subtitle.innerHTML=text2.substring(0,j);

j++;



if(j>text2.length){

    clearInterval(second);
    
    stopSound(sounds.typing);

    stopSound(sounds.typing);

    setTimeout(showVerification,2500);

}



},60);



}



},80);

}





function showQuestion(){

title.innerHTML="";

subtitle.innerHTML="";



typeWriter(

"🤔 But first...",

"I have ONE important question..."

);

}

const verifyMessages=[

"🗂️ Checking birthday records...",

"📅 Verifying date of birth...",

"🤖 Calculating current age...",

"📂 Contacting Birthday Database...",

"🎂 Confirming birthday details...",

"✨ Almost done..."

];

function showVerification(){
  
  stopSound(sounds.typing);

welcome.style.display="none";

let verify=document.getElementById("verifyScreen");

let verifyText=document.getElementById("verifyText");

verify.style.display="flex";

playSound(sounds.verification, 0.5);

let i=0;

verifyText.innerHTML=verifyMessages[0];

let timer=setInterval(function(){

i++;

if(i<verifyMessages.length){

verifyText.innerHTML=verifyMessages[i];

}else{

clearInterval(timer);

verifyText.innerHTML = "✅ Verification Complete";

setTimeout(function(){

    stopSound(sounds.verification);

    showQuestionScreen();

},1500);

}

},1500);

}

function showQuestionScreen(){

document.body.innerHTML=`

<div style="display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
text-align:center;
padding:20px;">

<h1>🤔</h1>

<h1>Are you getting OLD?</h1>

<p>Be honest... no cheating 😇</p>

<br>

<button 
onclick="showBirthdaySurprise()"
style="padding:15px 45px;
font-size:22px;
margin:10px;
border:none;
border-radius:15px;
background:#4CAF50;
color:white;">

YES 😭

</button>
<button id="noBtn"
onclick="event.preventDefault(); moveButton();"
ontouchstart="moveButton()"
onmousemove="moveButton()"

style="padding:15px 45px;
font-size:22px;
margin:10px;
border:none;
border-radius:15px;
background:#ff4f6d;
color:white;">
STILL 21 😎
</button>

</div>

`;

}

let attempts = 0;

const roasts = [
    "🙄 Nice try...",
    "😂 Too slow!",
    "🏃 Catch me first!",
    "😏 Is that all?",
    "👀 Missed again!",
    "🤣 Almost!",
    "💨 Faster than you!",
    "😜 Better luck!",
    "😎 Still dreaming?",
    "😂 Nice attempt!",
    "🤭 Oops... missed!",
    "🐢 Grandma is faster!",
    "😅 Warm-up only!",
    "💀 Skill issue!",
    "😏 Getting tired?",
    "🏃 Keep chasing!",
    "😂 I'm over here!",
    "🤣 Nope!",
    "😜 So close...",
    "💪 Try harder!",
    "👴 Feeling your age?",
    "😆 Not today!",
    "🫣 Too easy!",
    "😎 Still 21, remember?",
    "😂 You wish!",
    "🚀 Zoom!",
    "😏 Never gonna catch me!",
    "🤭 Wrong direction!",
    "😅 Better reflexes?",
    "🏃 Catch me if you can!",
    "😂 Keep going!",
    "🤣 This is fun!",
    "😜 Still chasing?",
    "💨 Missed by a mile!",
    "😏 Nope again!",
    "🤭 You blinked!",
    "😂 Try another tap!",
    "🚶 Need more practice!",
    "😆 Almost believable!",
    "👀 Looking for me?",
    "🤣 Not fast enough!",
    "😎 I can do this all day!",
    "🏃 Still running!",
    "😂 Persistence detected!",
    "🤭 So predictable!",
    "😜 One more try?",
    "💪 Don't give up!",
    "😂 You're determined!",
    "😏 Last chance...",
    "🤝 Okay... you win!"
];

function moveButton() {

    unlockAudio();
    playSound(sounds.button, 0.7);

    if (attempts < 50) {
        attempts++;
    }

    let noBtn = document.getElementById("noBtn");

    noBtn.innerHTML = `
        <div style="font-weight:bold;font-size:18px;">
            😎 STILL 21
        </div>

        <div style="font-size:11px;margin-top:4px;">
            ${roasts[Math.min(attempts - 1, roasts.length - 1)]}
        </div>
    `;

    console.log("Button moving...");

    const padding = 20;

    let x =
        Math.random() *
        (window.innerWidth - noBtn.offsetWidth - padding * 2) +
        padding;

    let minY = padding;

    let maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        padding;

    let y =
        Math.random() *
        (maxY - minY) +
        minY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.height = "70px";
}

function showBirthdaySurprise() {

    playSound(sounds.finally, 0.8);
    
    sounds.boom.volume = 0;
sounds.boom.play().then(() => {
    sounds.boom.pause();
    sounds.boom.currentTime = 0;
    sounds.boom.volume = 0.8;
}).catch(() => {});

sounds.birthday.volume = 0;

sounds.birthday.play().then(() => {

    sounds.birthday.pause();
    sounds.birthday.currentTime = 0;
    sounds.birthday.volume = 0.5;

}).catch(() => {});

    setTimeout(() => {

        startLoadingScreen();

    }, 3200);

}

function startLoadingScreen() {
  
  playSound(sounds.loading, 0.5);

    document.body.innerHTML = `

<div style="
position:fixed;
left:0;
top:0;
width:100vw;
height:100vh;
margin:0;
padding:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#111;
color:white;
font-family:sans-serif;
text-align:center;
overflow:hidden;
z-index:99999;
">

        <div style="font-size:70px;">🎁</div>

        <h1>Preparing Your Surprise...</h1>

        <h2 id="loadingText">🎂 Baking Cake...</h2>

        <progress
        id="progressBar"
        value="0"
        max="100"
        style="width:280px;height:20px;">
        </progress>

        <h2 id="percent">0%</h2>

    </div>

    `;
    
    let progress = 0;

let messages = [
    "🎂 Baking Cake...",
    "🎈 Inflating Balloons...",
    "🎁 Wrapping Gift...",
    "📸 Collecting Memories...",
    "🎵 Loading Birthday Music...",
    "✨ Adding Magic...",
    "❤️ Almost Ready..."
];

let loadingText = document.getElementById("loadingText");
let progressBar = document.getElementById("progressBar");
let percent = document.getElementById("percent");

let interval = setInterval(function () {

    progress++;

    progressBar.value = progress;
    percent.innerHTML = progress + "%";

    if (progress == 15)
        loadingText.innerHTML = messages[1];

    if (progress == 30)
        loadingText.innerHTML = messages[2];

    if (progress == 45)
        loadingText.innerHTML = messages[3];

    if (progress == 60)
        loadingText.innerHTML = messages[4];

    if (progress == 75)
        loadingText.innerHTML = messages[5];

    if (progress == 90)
        loadingText.innerHTML = messages[6];

    if (progress >= 100) {

    clearInterval(interval);

    stopSound(sounds.loading);
    
    document.body.innerHTML = "";

    showFinalBirthday();

}

}, 40);

}

let birthdayContainer = null;

function showFinalBirthday() {

    // Stop loading sound
    stopSound(sounds.loading);

    // Create birthday screen
    birthdayScreen = document.createElement("div");

    birthdayScreen.id = "birthdayScreen";

    birthdayScreen.style.position = "fixed";
    birthdayScreen.style.left = "0";
    birthdayScreen.style.top = "0";
    birthdayScreen.style.width = "100%";
    birthdayScreen.style.height = "100%";

    birthdayScreen.style.display = "flex";
    birthdayScreen.style.flexDirection = "column";
    birthdayScreen.style.justifyContent = "center";
    birthdayScreen.style.alignItems = "center";

    birthdayScreen.style.textAlign = "center";

    birthdayScreen.style.padding = "20px";

    birthdayScreen.style.background =
        "linear-gradient(135deg,#ff9a9e,#fad0c4)";

    birthdayScreen.style.color = "white";

    birthdayScreen.style.zIndex = "100";

    birthdayScreen.innerHTML = `

        <div style="font-size:80px;">
            🎉🎂🎉
        </div>

        <h1 style="font-size:48px;margin:20px 0;">
            HAPPY BIRTHDAY
        </h1>

        <h2 style="margin-bottom:20px;">
            THALAAA ❤️
        </h2>

        <p style="
            font-size:22px;
            line-height:1.7;
            max-width:600px;
        ">

            Wishing you a year filled with happiness,
            laughter, success and good health.

            <br><br>

            May every dream come true! ✨

            <br><br>

            <b>And remember...</b>

            <br><br>

            😎 STILL 21 😎

        </p>

    `;

    document.body.appendChild(birthdayScreen);

    // Fade Layer

    fadeLayer = document.createElement("div");

    fadeLayer.style.position = "fixed";
    fadeLayer.style.left = "0";
    fadeLayer.style.top = "0";
    fadeLayer.style.width = "100%";
    fadeLayer.style.height = "100%";

    fadeLayer.style.background = "#000";

    fadeLayer.style.opacity = "0";

    fadeLayer.style.transition = "opacity 1.2s ease";

    fadeLayer.style.pointerEvents = "none";

    fadeLayer.style.zIndex = "950";

    document.body.appendChild(fadeLayer);

    // Play Sounds

    playSound(sounds.boom,0.8);

    playSound(sounds.birthday,0.5);

    // Start celebration

    startCelebration();

}

function startCelebration() {
  
  const myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

myConfetti({
    particleCount: 180,
    spread: 90,
    origin: { x: 0, y: 0.6 }
});

myConfetti({
    particleCount: 180,
    spread: 90,
    origin: { x: 1, y: 0.6 }
});

    // 🎉 Left Confetti
    confetti({
    particleCount: 180,
    spread: 80,
    origin: { x: 0, y: 0.6 }
});

confetti({
    particleCount: 180,
    spread: 80,
    origin: { x: 1, y: 0.6 }
});

    // 🎈 Balloons
    balloonTimer = setInterval(createBalloon, 70);

    // ✨ Sparkles
    sparkleTimer = setInterval(createSparkle, 120);

    // Celebration lasts 5 seconds
    setTimeout(() => {

        clearInterval(balloonTimer);

        clearInterval(sparkleTimer);

        // Smooth fade to black
        fadeLayer.style.opacity = "1";

        setTimeout(() => {

            birthdayScreen.remove();

            showMemoryWall();

        }, 1200);

    }, 5000);

}

// =========================
// 🎈 Balloon Animation
// =========================

const balloonImages = [

    "Images/Gold.png",

    "Images/Blue with Gold.png",

    "Images/Pink with Blue.png",

    "Images/White.png",

    "Images/Dark blue.png",

    "Images/Blue and white.png",

    "Images/Multi balloons.png",

    "Images/Multi Gold.png",

    "Images/Star.png"

];

function createBalloon() {

    const balloon = document.createElement("img");

    balloon.src =
        balloonImages[
            Math.floor(Math.random() * balloonImages.length)
        ];

    balloon.style.position = "fixed";

    balloon.style.left =
        Math.random() * (window.innerWidth - 80) + "px";

    balloon.style.bottom = "-180px";

    const size = 45 + Math.random() * 45;

    balloon.style.width = size + "px";

    balloon.style.height = "auto";

    balloon.style.pointerEvents = "none";

    balloon.style.userSelect = "none";

    balloon.style.zIndex = "940";

    document.body.appendChild(balloon);

    let y = -180;

    let x = parseFloat(balloon.style.left);

    const speed = 1 + Math.random() * 2;

    const drift = (Math.random() - 0.5) * 0.8;

    const rotate = (Math.random() - 0.5) * 8;

    const timer = setInterval(() => {

        y += speed;

        x += drift;

        balloon.style.bottom = y + "px";

        balloon.style.left = x + "px";

        balloon.style.transform =
            `rotate(${rotate}deg)`;

        if (y > window.innerHeight + 250) {

            clearInterval(timer);

            balloon.remove();

        }

    }, 16);

}

// =========================
// ✨ Sparkle Animation
// =========================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.fontSize =
        (12 + Math.random() * 18) + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = "1";

    sparkle.style.zIndex = "945";

    sparkle.style.transition =
        "all 1s ease";

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform =
            `translateY(-25px) scale(2) rotate(${Math.random()*360}deg)`;

    });

    setTimeout(() => {

        sparkle.remove();

    }, 1000);

}

// =========================
// 📸 MEMORY WALL
// =========================

const TOTAL_PHOTOS = 164;

let memoryPhotos = [];

for (let i = 1; i <= TOTAL_PHOTOS; i++) {

    memoryPhotos.push(`Images/Memories/${i}.jpg`);

}

let memoryWall;
let memoryContainer;
let remainingPhotos = [];

let fadeTimer = null;
let nextBatchTimer = null;



function showMemoryWall() {

    // Remove fade layer
    if (fadeLayer) {
        fadeLayer.remove();
    }

    // Create wall
    memoryWall = document.createElement("div");

    memoryWall.style.position = "fixed";
    memoryWall.style.left = "0";
    memoryWall.style.top = "0";
    memoryWall.style.width = "100%";
    memoryWall.style.height = "100%";
    memoryWall.style.background = "#000";
    memoryWall.style.overflow = "hidden";
    memoryWall.style.zIndex = "9999";

    document.body.appendChild(memoryWall);

    // Container
    memoryContainer = document.createElement("div");

    memoryContainer.style.position = "relative";
    memoryContainer.style.width = "100%";
    memoryContainer.style.height = "100%";

    memoryWall.appendChild(memoryContainer);
    
    // Create Pause Button
const controls = document.createElement("div");

controls.id = "memoryControls";

controls.style.position = "fixed";
controls.style.top = "";
controls.style.right = "";

controls.style.bottom = "30px";
controls.style.left = "50%";
controls.style.transform = "translateX(-50%)";
controls.style.zIndex = "100000";

controls.innerHTML = `
<button id="pauseBtn"
style="
padding:12px 22px;
font-size:18px;
border:none;
border-radius:12px;
background:#ffffffdd;
cursor:pointer;
min-width:220px;
">
⏸️ Pause Slideshow
</button>
`;

memoryWall.appendChild(controls);

console.log("Pause button:", document.getElementById("pauseBtn"));

const pauseButton = document.getElementById("pauseBtn");

pauseButton.onclick = toggleMemoryPause;

    // Copy photo array
    remainingPhotos = [...memoryPhotos];

    // Shuffle photos
    remainingPhotos.sort(() => Math.random() - 0.5);

    // Start first batch
    showNextMemoryBatch();

}

function showFinalMemories(){
  
  const controls = document.getElementById("memoryControls");

if (controls) {
    controls.style.display = "none";
}

    const slideshow = document.createElement("div");

    slideshow.style.position = "fixed";
    slideshow.style.left = "0";
    slideshow.style.top = "0";
    slideshow.style.width = "100%";
    slideshow.style.height = "100%";

    slideshow.style.background = "#000";

    slideshow.style.display = "flex";
    slideshow.style.justifyContent = "center";
    slideshow.style.alignItems = "center";

    slideshow.style.zIndex = "99999";

    document.body.appendChild(slideshow);

    let index = 0;

    function nextPhoto(){

        if(index >= finalMemories.length){

            slideshow.remove();

            showEndCredits();

            return;

        }

        const img = document.createElement("img");

        img.src = finalMemories[index];

        img.style.maxWidth = "80vw";
        img.style.maxHeight = "80vh";

        img.style.border = "8px solid white";
        img.style.borderRadius = "10px";

        img.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.6)";

        img.style.opacity = "0";

        img.style.transition = "opacity .8s";

        slideshow.innerHTML = "";

        slideshow.appendChild(img);

        requestAnimationFrame(()=>{

            img.style.opacity = "1";

        });

        setTimeout(()=>{

            img.style.opacity = "0";

            setTimeout(()=>{

                index++;

                nextPhoto();

            },800);

        },2200);

    }

    nextPhoto();

}

// =========================
// 📸 MEMORY BATCH ENGINE
// =========================

function showNextMemoryBatch() {

    // If fewer than 9 photos remain,
    // start the center slideshow instead
    if (remainingPhotos.length < 9) {

        setTimeout(() => {

            showFinalMemories();

        }, 1200);

        return;

    }

    memoryContainer.innerHTML = "";

    memoryContainer.style.display = "grid";

    memoryContainer.style.gridTemplateColumns = "repeat(3,1fr)";

    memoryContainer.style.gridTemplateRows = "repeat(3,1fr)";

    memoryContainer.style.justifyItems = "center";

    memoryContainer.style.alignItems = "center";

    memoryContainer.style.width = "100%";

    memoryContainer.style.height = "100%";

    memoryContainer.style.padding = "25px 25px 160px 25px";

    memoryContainer.style.columnGap = "18px";
    memoryContainer.style.rowGap = "4px";

    const batchSize = Math.min(9, remainingPhotos.length);

    const currentBatch = remainingPhotos.splice(0, batchSize);

    currentBatch.forEach((src, index) => {

        const img = document.createElement("img");

        img.src = src;

        img.className = "memoryPhoto";

        const size = Math.min(
            window.innerWidth * 0.26,
            170
        );

        img.style.width = size + "px";

        img.style.height = "auto";

        img.style.objectFit = "cover";

        img.style.border = "8px solid white";

        img.style.borderRadius = "8px";

        img.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.45)";

        const angle = Math.random() * 6 - 3;

        img.style.transform =
            `rotate(${angle}deg) scale(.85)`;

        img.style.opacity = "0";

        img.style.transition = "none";

        memoryContainer.appendChild(img);

        // Row animation
        const row = Math.floor(index / 3);

        setTimeout(() => {

            img.style.opacity = "1";

            img.style.transform =
                `rotate(${angle}deg) scale(1)`;

        }, row * 400);

    });

    // Keep gallery visible

    fadeTimer = setTimeout(() => {

    if (memoryPaused) return;

    const photos =
        memoryContainer.querySelectorAll(".memoryPhoto");

    photos.forEach((photo) => {

        photo.style.opacity = "0";
        photo.style.transform += " scale(.9)";

    });

}, 2600);

    nextBatchTimer = setTimeout(() => {

    if (memoryPaused) return;

    memoryContainer.innerHTML = "";

    showNextMemoryBatch();

}, 3400);

}

function toggleMemoryPause() {

    memoryPaused = !memoryPaused;
    
    const photos = document.querySelectorAll(".memoryPhoto");

photos.forEach(photo => {
    photo.style.animationPlayState = memoryPaused ? "paused" : "running";
});

    const pauseBtn = document.getElementById("pauseBtn");

    if (!pauseBtn) return;

    if (memoryPaused) {

    clearTimeout(fadeTimer);
    clearTimeout(nextBatchTimer);

    sounds.birthday.pause();

    pauseBtn.innerHTML = "▶️ Continue Slideshow";

} else {

    sounds.birthday.play();

    pauseBtn.innerHTML = "⏸️ Pause Slideshow";

    fadeTimer = setTimeout(() => {

        if (memoryPaused) return;

        memoryContainer.querySelectorAll(".memoryPhoto").forEach(photo => {
            photo.style.animationPlayState = "running";
        });

    }, 0);

        nextBatchTimer = setTimeout(() => {

            memoryContainer.innerHTML = "";

            showNextMemoryBatch();

        }, 700);

    }

}

// =========================
// ❤️ FINAL MESSAGE
// =========================

function showFinalMessage() {

    // Remove memory wall
    if (memoryWall) {
        memoryWall.remove();
    }

    // Fade layer
    const ending = document.createElement("div");

    ending.style.position = "fixed";
    ending.style.left = "0";
    ending.style.top = "0";
    ending.style.width = "100%";
    ending.style.height = "100%";
    ending.style.background = "#000";
    ending.style.display = "flex";
    ending.style.flexDirection = "column";
    ending.style.justifyContent = "center";
    ending.style.alignItems = "center";
    ending.style.textAlign = "center";
    ending.style.padding = "30px";
    ending.style.boxSizing = "border-box";
    ending.style.zIndex = "10000";
    ending.style.opacity = "0";
    ending.style.transition = "opacity 2s ease";

    ending.innerHTML = `

        <h1 style="
            color:#FFD700;
            font-size:52px;
            margin-bottom:25px;
            font-family:cursive;">
            Happy Birthday THALAAA 🫀
        </h1>

        <div style="
            color:white;
            font-size:22px;
            line-height:1.8;
            max-width:850px;
            font-family:Arial,sans-serif;">

            Thanks for all the laughter, memories and support ❤️ <br><br>

            I hope this small surprise made you smile 😊<br><br>

            May this year bring you happiness, success,
            good health and lots of unforgettable memories.<br><br>

            Keep smiling... Keep shining... ✨<br><br>

            <span style="
                color:#FFD700;
                font-size:28px;
                font-weight:bold;">

                Once Again... Happy Birthday! 🎂🎉❤️

            </span>

        </div>

    `;

    document.body.appendChild(ending);

    requestAnimationFrame(() => {

        ending.style.opacity = "1";

    });

    // Optional: slowly reduce birthday music after 12 sec
    setTimeout(() => {

        if (sounds.birthday) {

            sounds.birthday.volume = 0.4;

        }

    }, 12000);

}

function showEndCredits(){

    document.body.replaceChildren();

    const credits=document.createElement("div");

    credits.style.position="fixed";

    credits.style.left="0";

    credits.style.top="0";

    credits.style.width="100%";

    credits.style.height="100%";

    credits.style.background="#000";

    credits.style.color="white";

    credits.style.display="flex";

    credits.style.justifyContent="center";

    credits.style.alignItems="center";

    credits.style.overflow="hidden";

    credits.style.zIndex="99999";

    credits.innerHTML=`

<div id="creditsContainer"

style="

position:absolute;

width:100%;

text-align:center;

padding:40px;

">

<h1 style="
color:gold;
font-size:60px;
margin-bottom:80px;
font-family:serif;
">

Happy 25 ThalaA 🫀

</h1>

<h2>Written & Directed by</h2>

<h1 style="margin-bottom:70px;">

ThalaA in ThalaA 🤞

</h1>

<h2>Special Thanks To</h2>

<h1 style="margin-bottom:70px;">

ThalaA 🙌 (Thanks for being YOU ️🧿)

</h1>

<h2>Starring</h2>

<h1 style="margin-bottom:70px;">

YOU 😊

</h1>

<h2>Also</h2>

<h1 style="margin-bottom:70px;">

No matter where life takes us,

our memories will always remain. 🫂

</h1>

<h1 style="margin-bottom:70px;">

Vera yenna solrathu nu therla, ThalaA 😅

</h1>

<h2>See You soooooon...</h2>

<h1 style="margin-top:90px;

color:gold;">

Once Again...

<br><br>

Happy Birthday Bhettiyooiii 🎂🫀

</h1>

</div>

`;

    document.body.appendChild(credits);
    
        const container =
        document.getElementById("creditsContainer");

    let position = window.innerHeight;

    container.style.transform =
        `translateY(${position}px)`;

    const speed = 1;   // Increase = faster

    function animateCredits(){

        position -= speed;

        container.style.transform =
            `translateY(${position}px)`;

        const endPoint =
            -(container.offsetHeight + 200);

        if(position > endPoint){

            requestAnimationFrame(animateCredits);

        }
        else{

            // Fade to black

            credits.style.transition =
                "opacity 2.5s";

            credits.style.opacity = "0";

            setTimeout(()=>{

                stopSound(sounds.birthday);

                credits.remove();

            },2500);

        }

    }

    requestAnimationFrame(animateCredits);
    
}

let currentHole = 0;

function showCapybara(){

document.querySelectorAll(".hole").forEach(h=>{

h.innerHTML="";

});

document.getElementById("hole"+currentHole).innerHTML=
'<div class="capybara">🐹</div>';

}

let chances = 0;

document.querySelectorAll(".hole").forEach(hole => {

hole.addEventListener("click", function () {  

    // Only respond if Capybara is in this hole  
    if (!hole.querySelector(".capybara")) return;  
      
    if (!audioUnlocked) {  

unlockAudio();  

setTimeout(() => {  

}, 200);

}

chances++;  

    if (chances == 1) {  

statusText.innerHTML = "Oops! Too Slow! 😂";  

setTimeout(() => {  
    playSound(sounds.lose, 0.6);  
}, 100);  

setTimeout(() => {  
    moveCapybara();  
}, 300);

}

else if (chances == 2) {

playSound(sounds.lose, 0.6);  

statusText.innerHTML = "You'll never catch me! 😜";  

setTimeout(() => {  
    moveCapybara();  
}, 250);

}

else {  
        
      playSound(sounds.win, 0.7);  
        
      document.getElementById("gameTitle").style.display = "none";

document.getElementById("gameIntro").style.display = "none";

document.getElementById("gameBoard").style.display = "none";

statusText.innerHTML = `

🏆<br><br>

<b>LEVEL COMPLETE!</b><br><br>

🐹 You caught me!<br><br>

😂 Fine...<br>

You Win!
`;

statusText.classList.add("levelComplete");

statusText.style.marginTop = "120px";

statusText.style.fontSize = "30px";

statusText.style.lineHeight = "1.8";

statusText.style.textAlign = "center";

hole.querySelector(".capybara").style.transform =
"translateX(-50%) scale(1.25)";

setTimeout(function(){  

    document.getElementById("startScreen").style.opacity="0";  

},2500);  

setTimeout(function(){  
    
  statusText.classList.remove("levelComplete");  

stopSound(sounds.win);  

document.getElementById("startScreen").style.display = "none";  

document.getElementById("loadingScreen").style.display = "flex";  

startLoading();

}, 5000);

}

});

});

function moveCapybara(){

let newHole;  

do{  

    newHole = Math.floor(Math.random()*4);  

}while(newHole == currentHole);  

currentHole = newHole;  

showCapybara();

}

showCapybara();

