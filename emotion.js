
// script.js
function detectEmotion() {
  const input = document.getElementById("userinput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  let mood = "😐 Neutral";
  let currentaudio=null;

  if (input.includes("happy") || input.includes("joy") || input.includes("great") ||input.includes("nice")|| input.includes("awesome")) {
    mood = "😀 Happy";
    document.body.style.background = "#d4f4dd";
    showEmojiBurst("😀");
  }
   else if (input.includes("sad") || input.includes("cry") || input.includes("depressed") || input.includes("lonely")) {
    mood = "😢 Sad";
    document.body.style.background = "#fce4ec";
    showEmojiBurst("😪");
  } 
  else if (input.includes("angry") || input.includes("mad") || input.includes("hate")) {
    mood = "😠 Angry";
    document.body.style.background = "#ffe0b2";
    showEmojiBurst("😠");
  }
   else if (input.includes("love") || input.includes("like") || input.includes("cute")) {
    mood = "😍 Love";
    document.body.style.background = "deeppink";
    showEmojiBurst("💖");
    //playmusic("song1.mp3");
  }

else if (input.includes("excited")) {
    mood = "😎 Excited";
    document.body.style.background = "deeppink";
    showEmojiBurst("😎");
  }

  else if (input.includes("anxiety")) {
    mood = "😰 Anxiety";
    document.body.style.background = "deeppink";
    showEmojiBurst(" 😰");
  }


  else if (input.includes("suprised")) {
    mood = "🤩 Suprised";
    document.body.style.background = "deeppink";
    showEmojiBurst("🤩");
  }


   else {
    document.body.style.background = "#f3f3f3";
  }

  resultDiv.innerText=mood;
}

function showEmojiBurst(emoji) {
  const container = document.getElementById("emoji-brust-container");

  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.classList.add("emoji");
    span.innerText = emoji;

    // Random position
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";

    container.appendChild(span);

    // Remove emoji after animation
    setTimeout(() => {
      span.remove();
   },2000);
}
}

/*
function playmusic(filename);
{

  if(currentAudio){

    currentAudio.pause();
    currentAudio.currentTime=0;

  }
  currentAudio=new Audio(filename);
  currentAudio.loop=true;
  currentAudio.play();
}*/