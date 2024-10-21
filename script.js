const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight; 
canvas.width = window.innerWidth; 

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
const fontSize = 16; 
const columns = Math.floor(canvas.width / fontSize); 
let drops = new Array(columns).fill(0); 

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    ctx.fillStyle = '#0F0'; 
    ctx.font = fontSize + 'px monospace'; 

    for (let i = 0; i < columns; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i]); 
        drops[i] = (drops[i] + fontSize) % canvas.height; 
    }
}

setInterval(draw, 100); 
