class Wowify {
    static startParty({ confettiDuration = 2000, sound = null } = {}) {
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        document.body.appendChild(confettiContainer);

        const colors = ['#ff5733', '#33d9ff', '#ffdd57', '#a29bfe', '#fd79a8'];
        let confettiCount = 0;
        const totalConfetti = 100;
        const interval = confettiDuration / totalConfetti;

        const confettiInterval = setInterval(() => {
            if (confettiCount >= totalConfetti) {
                clearInterval(confettiInterval);
                confettiContainer.remove();
                return;
            }

            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animation = `fall ${confettiDuration / 1000}s linear infinite`;
            confettiContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), confettiDuration);
            confettiCount++;
        }, interval);

        if (sound) {
            const audio = new Audio(sound);
            audio.play();
        }
    }
}

export { Wowify as default };
