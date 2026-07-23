const passcodePage = document.getElementById("passcodePage");
const bearPage = document.getElementById("bearPage");
const card = document.querySelector(".card");
const birthdayPage = document.getElementById("birthdayPage");


const cardPage = document.getElementById("cardPage");

const music = document.getElementById("music");
const message = document.getElementById("typewriter");

// =======================================
// PASSWORD
// =======================================

let password = "";
const correctPassword = "2005";

// =======================================
// INITIALIZE WEBSITE
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    passcodePage.style.display = "flex";
    bearPage.style.display = "none";
    cardPage.style.display = "none";
    birthdayPage.style.display = "none";

    updateDisplay();

});

// =======================================
// PASSCODE
// =======================================

function press(num){

    console.log("Pressed:", num);

    if(password.length < 4){

        password += num;

        updateDisplay();

    }

}

function clearPass() {

    password = password.slice(0, -1);

    updateDisplay();

}

function updateDisplay() {

    for (let i = 1; i <= 4; i++) {

        const box = document.getElementById("b" + i);

        if (box) {

            box.textContent = password[i - 1] || "";

        }

    }

}

function checkPass() {

    if (password === correctPassword) {

        password = "";

        updateDisplay();

        passcodePage.style.display = "none";
        bearPage.style.display = "flex";

    } else {

        alert("❌ Wrong Passcode!");

        password = "";

        updateDisplay();

    }

}

// =======================================
// BEAR PAGE
// =======================================

const openGift = document.getElementById("openGift");
const showBirthday = document.getElementById("showBirthday");

// Bear page -> Card page
openGift.addEventListener("click", () => {
    bearPage.style.display = "none";
    cardPage.style.display = "flex";
});



// =======================================
// GREETING CARD
// =======================================
// This only flips the card visually. It does NOT advance to the
// birthday page — that happens only when "Continue" is clicked
// (see showBirthday listener below).
if (card) {
    card.addEventListener("click", () => {

        card.classList.add("open");

    });
}

if (showBirthday) {
    showBirthday.addEventListener("click", async (e) => {

        // Stop the click from bubbling up to the card's own
        // click listener (the button sits inside .card).
        e.stopPropagation();

        cardPage.style.display = "none";
        birthdayPage.style.display = "flex";

        try {
            await music.play();
        } catch (err) {}

        index = 0;
        message.innerHTML = "";

        typeWriter();
        createConfetti();
    });
}



// =======================================
// MESSAGE
// =======================================

const text = `শুভ জন্মদিন, আমার প্রিয় মানুষ❤️🎂
আজকের দিনটা আমার কাছেও ভীষণ বিশেষ প্রিয়, কারণ আজকের এই দিনেই পৃথিবীতে এসেছিলি তুই—যে মানুষটা আমার জীবনে এসে সবকিছু আরও সুন্দর করে দিয়েছে।
তোর হাসিটা আমার সবচেয়ে প্রিয়, তোর কণ্ঠ শুনলেই মনটা ভালো হয়ে যায় আর তোর সাথে গল্পে মেতে থাকলে সময়টা যেন উড়ে যায়। মনে হয়, আর একটু যদি কথা বলতে পারতাম🥺👉👈💖! আর তোর উপস্থিতি আমার প্রতিটি দিনকে আরও ভালো করে তোলে, আর যেদিন তুই মেসেজ করিস আমার নিজেকে পৃথিবীর সবচেয়ে খুশি মানুষের একজন মনে হয়😄। তুই হয়তো জানিস ই না তোর মেসেজ না এলে বা তোকে দেখতে না পেলে আমার মন ঠিক কতটা খারাপ থাকে🫠। 
জীবনে যত ঝড়-ঝাপটাই আসুক না কেন, আমি চাই আমরা সবসময় একে অপরের হাত শক্ত করে ধরে এগিয়ে যাই।
তোর জীবনের প্রতিটি স্বপ্ন যেন সত্যি হয়, প্রতিটি লক্ষ্য তুই অর্জন করিস। সুখ, শান্তি, সুস্বাস্থ্য আর সাফল্য যেন সবসময় তোর সঙ্গী হয়। তুই সবসময় হাসিখুশি থাকিস, ভালো থাকিস, আর তোর সেই সুন্দর হাসিটা যেন কখনো ম্লান না হয়।
আমার জীবনে আসার জন্য, আমাকে এতটা ভালোবাসার জন্য, আমার সুখ-দুঃখের প্রতিটি মুহূর্তে পাশে থাকার জন্য তোকে অসংখ্য ধন্যবাদ। তোর সঙ্গে কাটানো প্রতিটি মুহূর্ত আমার কাছে অমূল্য। আমি চাই, ভবিষ্যতেও আমরা একসঙ্গে হাজারো সুন্দর স্মৃতি তৈরি করি।
প্রতিদিন ঈশ্বরের কাছে আমার একটাই প্রার্থনা—তিনি যেন তোকে সবসময় ভালো রাখেন, সুস্থ রাখেন এবং আমাদের সম্পর্ককে আরও গভীর, আরও সুন্দর ও আরও শক্তিশালী করে তোলে।
জন্মদিনের অনেক অনেক শুভেচ্ছা ও অফুরন্ত ভালোবাসা, সৌম্য ❤️
তুই আমার আজ, তুই আমার আগামী, আর তুই আমার জীবনের সবচেয়ে সুন্দর অনুভূতি। তোর হাতটা এভাবেই সারাজীবন ধরে রাখতে চাই।
ভালোবাসি তোকে—আজ, আগামীকাল, আর সারাজীবন❤️🌹
চিরকাল আমার হয়েই থাকিস এবং আমাকে আগলে রাখিস💖✨
সবকিছু মেনে নেবো কিন্তু কোনো মেয়েকে তোর সঙ্গে দেখলে তাকে আমি কেটে ফেলব 🔪 😏আমার একটু বেশি রাগ না হয় ভাঙিয়ে দিস আদর করে😁অনেক অভিমান জমে আছে কিন্তু😒এবার না ভাঙ্গালে অভিমানের পাহাড় তৈরি হয়ে যাবে 😤 আর রাগ না ভাঙ্গালে তোকে দিয়ে আমি অনেক কাজ করাবো 😤
আবারও শুভ জন্মদিন, আমার প্রিয় মানুষ🎂🎉❤️`;

let index = 0;

// =======================================
// TYPEWRITER
// =======================================

function typeWriter() {

    if (index === 0) {

        message.innerHTML = "";

    }

    if (index < text.length) {

        message.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

// =======================================
// CONFETTI
// =======================================

function createConfetti() {

    const colors = [
        "#ff1744",
        "#ffd600",
        "#00e676",
        "#2979ff",
        "#ff9100",
        "#d500f9",
        "#ff6ec7",
        "#00c2ff"
    ];

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                {
                    transform: "translateY(0px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${Math.random()*300-150}px,${window.innerHeight+150}px)
                    rotate(${Math.random()*720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random()*3000,
                easing: "linear"
            }
        );

        setTimeout(() => confetti.remove(), 6000);

    }

}

// =======================================
// FLOATING HEARTS
// =======================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "110vh";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform:"translateY(0)",
                opacity:0
            },
            {
                transform:"translateY(-120vh)",
                opacity:1
            },
            {
                transform:"translateY(-140vh)",
                opacity:0
            }
        ],
        {
            duration:7000,
            easing:"linear"
        }
    );

    setTimeout(() => heart.remove(),7000);

}

setInterval(createHeart,700);

// =======================================
// ROSE PETALS
// =======================================

const petals = document.getElementById("petals");

function createPetal(){

    if(!petals) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left =
        Math.random()*window.innerWidth + "px";

    petal.style.fontSize =
        (18+Math.random()*18)+"px";

    petals.appendChild(petal);

    petal.animate(

        [
            {
                transform:"translateY(-50px) rotate(0deg)"
            },
            {
                transform:
                `translate(${Math.random()*250-125}px,
                ${window.innerHeight+100}px)
                rotate(${Math.random()*720}deg)`
            }
        ],

        {
            duration:6000+Math.random()*5000,
            easing:"linear"
        }

    );

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,450);

// =======================================
// SPARKLES
// =======================================

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.fontSize="20px";
    star.style.pointerEvents="none";
    star.style.zIndex="9999";

    document.body.appendChild(star);

    star.animate(

        [
            {
                opacity:0,
                transform:"scale(.5)"
            },
            {
                opacity:1,
                transform:"scale(1.3)"
            },
            {
                opacity:0,
                transform:"scale(.5)"
            }
        ],

        {
            duration:1000
        }

    );

    setTimeout(()=>{

        star.remove();

    },1000);

}

setInterval(sparkle,250);

// =======================================
// HEART ON CLICK
// =======================================

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.fontSize="24px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="99999";

    document.body.appendChild(heart);

    heart.animate(

        [
            {
                transform:"translateY(0px) scale(1)",
                opacity:1
            },
            {
                transform:"translateY(-70px) scale(2)",
                opacity:0
            }
        ],

        {
            duration:900,
            easing:"ease-out"
        }

    );

    setTimeout(()=>{

        heart.remove();

    },900);

});
// =======================================
// KEYBOARD SUPPORT
// =======================================

document.addEventListener("keydown", function (e) {

    // Only work when passcode page is visible
    if (passcodePage.style.display === "none") return;

    const key = e.key;

    // Numbers 0-9
    if (key >= "0" && key <= "9") {
        press(key);
    }

    // Delete last digit
    else if (key === "Backspace") {
        clearPass();
    }

    // Submit
    else if (key === "Enter") {
        checkPass();
    }

});
// =======================================
// FIREWORKS
// =======================================

function fireworks() {

    for (let i = 0; i < 60; i++) {

        const dot = document.createElement("div");

        dot.style.position = "fixed";
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.borderRadius = "50%";
        dot.style.background =
            `hsl(${Math.random()*360},100%,60%)`;

        dot.style.left = "50%";
        dot.style.top = "50%";
        dot.style.pointerEvents = "none";
        dot.style.zIndex = "99999";

        document.body.appendChild(dot);

        const x = (Math.random() - 0.5) * 800;
        const y = (Math.random() - 0.5) * 800;

        dot.animate(
            [
                {
                    transform: "translate(0,0)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px,${y}px)`,
                    opacity: 0
                }
            ],
            {
                duration: 1600,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            dot.remove();

        }, 1700);

    }

}

// =======================================
// AUTO FIREWORKS
// =======================================

setInterval(() => {

    if (birthdayPage.style.display === "flex") {

        fireworks();

    }

}, 12000);

// =======================================
// PAGE TITLE
// =======================================



let titleIndex = 0;

document.title = "A Little Surprise For You 💌";

// =======================================
// READY
// =======================================

console.log("❤️ Birthday Surprise Loaded ❤️");
}

setInterval(createPetal,500);
