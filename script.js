function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    createConfetti();
}

function createConfetti() {
    //
    for (let i = 0; i < 35; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.innerHTML = "💖";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confetti.style.fontSize = Math.random() * 20 + 18 + "px";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
        
    }
}