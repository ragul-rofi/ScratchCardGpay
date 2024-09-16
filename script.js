const scratchCard = document.getElementById('scratch');
const canvas = scratchCard.querySelector('canvas')
const ctx = canvas.getContext('2d');

canvas.width = scratchCard.offsetWidth;
canvas.height = scratchCard.offsetHeight;

const gradient = ctx.createConicGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, '#4285f4');
gradient.addColorStop(0, '#206dd9');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#fff';
ctx.font = '24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Scratch here for #update', canvas.width /2, canvas.height/2);

let isDrawing = false;
let isMouseDown = false;

function getMousePos(e){
    const rect = canvas.getBoundingClientRect();
    return{
        x: (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

function getTouchPos(e){
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    return{
        x: (touch.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (touch.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
canvas.addEventListener('mousedown', function(e){
    isDrawing = true;
    isMouseDown = true;
    const pos = getMousePos(e);
    scratch(pos.x, pos.y);
});
canvas.addEventListener('mousemove',function(e){
    if(isDrawing && isMouseDown){
        const pos = getMousePos(e);
        scratch(pos.x, pos.y);
    }
});
canvas.addEventListener('touchmove', function(e){
    e.preventDefault();
    if (isDrawing){
        const pos = getMousePos(e);
        scratch(pos.x. pos.y);
    }
});
canvas.addEventListener('mouseup', function(e){
    isDrawing = false;
    isMouseDown = false;
});
canvas.addEventListener('mouseleave', function(e){
    isDrawing = false;
});
canvas.addEventListener('mouseenter', function(e){
    if (isMouseDown){
        isDrawing = true;
    }
});
document.addEventListener('mouseup', function(e){
    isMouseDown = false;
});
canvas.addEventListener('touchstart', function(e){
    e.preventDefault();
    isDrawing = true;
    const pos = getTouchPos(e);
    scratch(pos.x, pos.y);
});
canvas.addEventListener('touchpad',function(e){
    e.preventDefault();
    isDrawing = false;
});
function scratch(x,y){
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2*Math.PI);
    ctx.fill();
}
