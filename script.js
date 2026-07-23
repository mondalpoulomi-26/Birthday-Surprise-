const giftSection = document.getElementById("giftSection");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");
const openGift = document.getElementById("openGift");
const playBtn = document.getElementById("playBtn");
const message = document.getElementById("typewriter");

// Birthday Message
const text = `Happy Birthday, Soumo ❤️

শুভ জন্মদিন, আমার প্রিয় মানুষ❤️🎂

আজকের দিনটা আমার কাছেও ভীষণ বিশেষ প্রিয়, কারণ আজকের এই দিনেই পৃথিবীতে এসেছিলি তুই—যে মানুষটা আমার জীবনে এসে সবকিছু আরও সুন্দর করে দিয়েছে।

তোর হাসিটা আমার সবচেয়ে প্রিয়, তোর কণ্ঠ শুনলেই মনটা ভালো হয়ে যায় আর তোর সাথে গল্পে মেতে থাকলে সময়টা যেন উড়ে যায়। মনে হয়, আর একটু যদি কথা বলতে পারতাম🥺💖! আর তোর উপস্থিতি আমার প্রতিটি দিনকে আরও ভালো করে তোলে, আর যেদিন তুই মেসেজ করিস আমার নিজেকে পৃথিবীর সবচেয়ে খুশি মানুষের একজন মনে হয়। তুই হয়তো জানিস ই না তোর মেসেজ না এলে বা তোকে দেখতে না পেলে আমার মন ঠিক কতটা খারাপ থাকে। 

 জীবনে যত ঝড়-ঝাপটাই আসুক না কেন, আমি চাই আমরা সবসময় একে অপরের হাত শক্ত করে ধরে এগিয়ে যাই।

তোর জীবনের প্রতিটি স্বপ্ন যেন সত্যি হয়, প্রতিটি লক্ষ্য তুই অর্জন করিস। সুখ, শান্তি, সুস্বাস্থ্য আর সাফল্য যেন সবসময় তোর সঙ্গী হয়। তুই সবসময় হাসিখুশি থাকিস, ভালো থাকিস, আর তোর সেই সুন্দর হাসিটা যেন কখনো ম্লান না হয়।

আমার জীবনে আসার জন্য, আমাকে এতটা ভালোবাসার জন্য, আমার সুখ-দুঃখের প্রতিটি মুহূর্তে পাশে থাকার জন্য তোকে অসংখ্য ধন্যবাদ। তোর সঙ্গে কাটানো প্রতিটি মুহূর্ত আমার কাছে অমূল্য। আমি চাই, ভবিষ্যতেও আমরা একসঙ্গে হাজারো সুন্দর স্মৃতি তৈরি করি।

প্রতিদিন ঈশ্বরের কাছে আমার একটাই প্রার্থনা—তিনি যেন তোকে সবসময় ভালো রাখেন, সুস্থ রাখেন এবং আমাদের সম্পর্ককে আরও গভীর, আরও সুন্দর ও আরও শক্তিশালী করে তোলে।

জন্মদিনের অনেক অনেক শুভেচ্ছা ও অফুরন্ত ভালোবাসা, সৌম্য ❤️

তুই আমার আজ, তুই আমার আগামী, আর তুই আমার জীবনের সবচেয়ে সুন্দর অনুভূতি। তোর হাতটা এভাবেই সারাজীবন ধরে রাখতে চাই।

ভালোবাসি তোকে—আজ, আগামীকাল, আর সারাজীবন❤️🌹
চিরকাল আমার হয়েই থাকিস এবং আমাকে আগলে রাখিস💖✨
সবকিছু মেনে নেবো কিন্তু কোনো মেয়েকে তোর সঙ্গে দেখলে তাকে আমি কেটে ফেলব 🔪 😏আমার একটু বেশি রাগ না হয় ভাঙিয়ে দিস আদর করে😁অনেক অভিমান জমে আছে কিন্তু😒এবার না ভাঙ্গালে অভিমানের পাহাড় তৈরি হয়ে যাবে 😤 আর রাগ না ভাঙলে তোকে দিয়ে আমি অনেক কাজ করাবো 😤
আবারও শুভ জন্মদিন, আমার ভালোবাসা 🎂🎉❤️
`

let index = 0;

// Open Gift
openGift.addEventListener("click", () => {

    giftSection.style.display = "none";
    mainContent.style.display = "flex";

    music.play().catch(() => {});

    typeWriter();

    createConfetti();

});

// Play Music Button
playBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        playBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        playBtn.innerHTML = "🎵 Play Music";
    }

});

// Typewriter Effect
function typeWriter() {

    if(index < text.length){

        message.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}

// Floating Hearts
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";
    heart.style.transition="transform 7s linear, opacity 7s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=`translateY(-120vh) rotate(${Math.random()*360}deg)`;
        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,700);

// Sparkles
function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.fontSize="20px";
    star.style.pointerEvents="none";
    star.style.opacity="1";
    star.style.transition="opacity 1s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.opacity="0";

    },500);

    setTimeout(()=>{

        star.remove();

    },1000);

}

setInterval(sparkle,250);

// Confetti
function createConfetti(){

    for(let i=0;i<150;i++){

        const confetti=document.createElement("div");

        confetti.style.position="fixed";
        confetti.style.width="8px";
        confetti.style.height="8px";

        const colors=[
            "#ff1744",
            "#ffd600",
            "#2979ff",
            "#00e676",
            "#ff9100",
            "#d500f9"
        ];

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-20px";

        confetti.style.opacity="1";

        confetti.style.pointerEvents="none";

        confetti.style.transition=
        `transform ${3+Math.random()*3}s linear,
         opacity ${3+Math.random()*3}s`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.transform=
            `translateY(${window.innerHeight+100}px)
             rotate(${Math.random()*720}deg)`;

            confetti.style.opacity="0";

        },100);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

// Change Title
const titles=[
"🎂 Happy Birthday Soumo ❤️",
"❤️ Have a Wonderful Day ❤️",
"🎉 Wishing You Endless Happiness 🎉"
];

let t=0;

setInterval(()=>{

document.title=titles[t];

t=(t+1)%titles.length;

},2000);

// 🌹 Falling Rose Petals

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    petal.style.opacity = Math.random();

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },11000);

}

setInterval(createPetal,500);
