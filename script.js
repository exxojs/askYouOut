var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".stickyHeader").style.top = "0";
  } else {
    document.querySelector(".stickyHeader").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("cutie").style.color = "red";
    document.getElementById("pangalan").innerText = ";D >Chat Me!";

    document.getElementById("messageText").innerText = "I believe in love at first sight too! \n How about we go on a date and see if it's true?";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("cutie").style.color = "#ff3737";
    document.getElementById("messageText").innerText = "No worries, love takes time. But we can spend some time together and see if we are a good match for each other. How does that sound?";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  