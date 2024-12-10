class Wowify {
    static startParty({ confettiDuration = 2000, sound = null } = {}) {
        const confettiContainer = document.getElementById('confetti-container');
        const colors = ['#ff5733', '#33d9ff', '#ffdd57', '#a29bfe', '#fd79a8'];

        // Play the sound if provided
        if (sound) {
            const audio = new Audio(sound);
            audio.play();
        }

        // Add confetti dynamically at intervals
        let confettiCount = 0;
        const totalConfetti = 100; // Total number of confetti
        const interval = confettiDuration / totalConfetti; // Spread confetti evenly across duration

        const confettiInterval = setInterval(() => {
            if (confettiCount >= totalConfetti) {
                clearInterval(confettiInterval); // Stop adding confetti after totalConfetti
                return;
            }

            // Create and style a single confetti
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = `fall ${confettiDuration / 1000}s linear infinite`;
            confettiContainer.appendChild(confetti);

            // Remove confetti after it finishes falling
            setTimeout(() => confetti.remove(), confettiDuration);

            confettiCount++;
        }, interval);

        // Temporary background effect
        document.body.style.background = 'linear-gradient(120deg, #ff9ff3, #feca57)';
        setTimeout(() => {
            document.body.style.background = '#f0f0f0';
        }, confettiDuration);
    }
}
