// Matrix Rain Animation (canvas id="matrix")
const matrixCanvas = document.getElementById('matrix');
const matrixCtx = matrixCanvas.getContext('2d');
let matrixWidth = window.innerWidth;
let matrixHeight = window.innerHeight;
matrixCanvas.width = matrixWidth;
matrixCanvas.height = matrixHeight;

const matrixFontSize = 22;
let matrixColumns = Math.floor(matrixWidth / matrixFontSize);
let matrixDrops = Array(matrixColumns).fill(1);

function randomKatakana() {
    return String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0));
}

function drawMatrixRain() {
    matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    matrixCtx.fillRect(0, 0, matrixWidth, matrixHeight);
    matrixCtx.font = matrixFontSize + "px monospace";
    matrixCtx.fillStyle = '#0F0';
    for(let i = 0; i < matrixDrops.length; i++) {
        const text = randomKatakana();
        matrixCtx.fillText(text, i * matrixFontSize, matrixDrops[i] * matrixFontSize);
        if(matrixDrops[i] * matrixFontSize > matrixHeight && Math.random() > 0.975)
            matrixDrops[i] = 0;
        matrixDrops[i]++;
    }
}
setInterval(drawMatrixRain, 40);

window.addEventListener('resize', () => {
    matrixWidth = window.innerWidth;
    matrixHeight = window.innerHeight;
    matrixCanvas.width = matrixWidth;
    matrixCanvas.height = matrixHeight;
    matrixColumns = Math.floor(matrixWidth / matrixFontSize);
    matrixDrops = Array(matrixColumns).fill(1);
});

// Matrix Hacker Animation (canvas id="matrix-bg")
const hackerCanvas = document.getElementById('matrix-bg');
const hackerCtx = hackerCanvas.getContext('2d');
let hackerWidth = window.innerWidth;
let hackerHeight = window.innerHeight;
hackerCanvas.width = hackerWidth;
hackerCanvas.height = hackerHeight;

const hackerLetters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const hackerFontSize = 18;
let hackerColumns = Math.floor(hackerWidth / hackerFontSize);
let hackerDrops = Array(hackerColumns).fill(1);

function drawHackerMatrix() {
    hackerCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    hackerCtx.fillRect(0, 0, hackerWidth, hackerHeight);
    hackerCtx.font = hackerFontSize + "px monospace";
    hackerCtx.fillStyle = "#0F0";
    for (let i = 0; i < hackerDrops.length; i++) {
        const text = hackerLetters[Math.floor(Math.random() * hackerLetters.length)];
        hackerCtx.fillText(text, i * hackerFontSize, hackerDrops[i] * hackerFontSize);
        if (hackerDrops[i] * hackerFontSize > hackerHeight && Math.random() > 0.975) {
            hackerDrops[i] = 0;
        }
        hackerDrops[i]++;
    }
}
setInterval(drawHackerMatrix, 33);

window.addEventListener('resize', () => {
    // Resize both canvases
    matrixWidth = window.innerWidth;
    matrixHeight = window.innerHeight;
    matrixCanvas.width = matrixWidth;
    matrixCanvas.height = matrixHeight;
    matrixColumns = Math.floor(matrixWidth / matrixFontSize);
    matrixDrops = Array(matrixColumns).fill(1);

    hackerWidth = window.innerWidth;
    hackerHeight = window.innerHeight;
    hackerCanvas.width = hackerWidth;
    hackerCanvas.height = hackerHeight;
    hackerColumns = Math.floor(hackerWidth / hackerFontSize);
    hackerDrops = Array(hackerColumns).fill(1);
});

// Reloj digital en tiempo real
function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById('clock').textContent = `${h}:${m}`;
}
setInterval(updateClock, 1000);
updateClock();

        // Reproducir música tras cualquier interacción del usuario
        function tryPlayMusic() {
            const audio = document.getElementById('bg-music');
            if (audio && audio.paused) {
                audio.volume = 1.0; // Volumen al 100%
                audio.play().catch(() => {
                    if (!document.getElementById('audio-msg')) {
                        const msg = document.createElement('div');
                        msg.id = 'audio-msg';
                        msg.textContent = 'Haz clic en cualquier parte para activar la música.';
                        msg.style.position = 'fixed';
                        msg.style.top = '50%';
                        msg.style.left = '50%';
                        msg.style.transform = 'translate(-50%, -50%)';
                        msg.style.background = '#111';
                        msg.style.color = '#0f0';
                        msg.style.padding = '20px 40px';
                        msg.style.border = '2px solid #0f0';
                        msg.style.borderRadius = '10px';
                        msg.style.zIndex = '9999';
                        document.body.appendChild(msg);
                        setTimeout(() => {
                            msg.remove();
                        }, 3000);
                    }
                });
            }
            document.removeEventListener('click', tryPlayMusic);
            document.removeEventListener('keydown', tryPlayMusic);
            document.removeEventListener('touchstart', tryPlayMusic);
        }