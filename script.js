// JavaScript for Interactive Website

// Login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Haha baby you don't even need to log in, you already have my heart. This was just a trick. Enjoy the little thing I made for you.. 💖");
    document.getElementById('login-overlay').style.display = 'none';
});

// Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => {
            if (section.id !== 'intro') section.classList.add('hidden');
        });
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// Quest Logic
document.getElementById('start-quest').addEventListener('click', function() {
    document.getElementById('quest').classList.remove('hidden');
});

// Play Music Button
document.getElementById('play-music').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'intro') section.classList.add('hidden');
    });
    document.getElementById('music').classList.remove('hidden');
    // Try to play the audio
    setTimeout(() => {
        const audio = document.querySelector('audio');
        if (audio) {
            audio.play().catch(e => console.log('Autoplay blocked', e));
        }
    }, 100);
});

document.getElementById('submit1').addEventListener('click', function() {
    const answer = document.getElementById('answer1').value.toLowerCase();
    if (answer.includes('architect') || answer.includes('thena') || answer.includes('you') || answer.includes('my love')) {
        document.getElementById('riddle-container').classList.add('hidden');
        document.getElementById('poem1').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('riddle2').classList.remove('hidden');
        }, 2000);
    } else {
        alert('Not quite! Think about who builds the castles in my heart.');
    }
});

document.getElementById('submit2').addEventListener('click', function() {
    const answer = document.getElementById('answer2').value.toLowerCase();
    if (answer.includes('love') || answer.includes('bond') || answer.includes('friendship')) {
        document.getElementById('riddle2').classList.add('hidden');
        document.getElementById('poem2').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('riddle3').classList.remove('hidden');
        }, 2000);
    } else {
        alert('Close! In D&D, what ties adventurers together?');
    }
});

document.getElementById('submit3').addEventListener('click', function() {
    const answer = document.getElementById('answer3').value.toLowerCase();
    if (answer.includes('queen') || answer.includes('tari') || answer.includes('my queen')) {
        document.getElementById('riddle3').classList.add('hidden');
        document.getElementById('poem3').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('treasure').classList.remove('hidden');
            createConfetti();
        }, 2000);
    } else {
        alert('Almost there! Who rules your heart with love and laughter?');
    }
});

// Game Logic
let score = 0;
const orbs = document.querySelectorAll('.orb');
orbs.forEach(orb => {
    orb.addEventListener('click', function() {
        if (!this.classList.contains('collected')) {
            this.classList.add('collected');
            score++;
            document.getElementById('score').textContent = `Score: ${score}`;
            if (score === orbs.length) {
                document.getElementById('win-message').classList.remove('hidden');
            }
        }
    });
});

// Confetti Function
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#ffd700', '#ffed4e', '#4b0082', '#8a2be2'][Math.floor(Math.random() * 4)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}`;
document.head.appendChild(style);


