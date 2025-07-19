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