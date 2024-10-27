let moveInterval = null;

// code start function
function startmoving() {
    // variable for code
    const meme = document.getElementById('memeimage');
    let x = 0;
    let y = 0;
    const speed = 5;

    // funcion with code that moves the meme 
    moveInterval = setInterval(() => {
        x += speed;
        y += speed;
        meme.style.left = x + 'px';
        meme.style.top = y + 'px';

        if (x > window.innerWidth || y > window.innerHeight) {
            x = 0;
            y = 0;
        }
    }, 50);

    // enable start and disable stop
    document.getElementById('startbutton').disabled = true;
    document.getElementById('stopbutton').disabled = false;
}
// code stop function
function stopmoving() {
    // resets meme position
    clearInterval(moveInterval);

     //disable start and enable stop
    document.getElementById('stopbutton').disabled = true;
    document.getElementById('startbutton').disabled = false;
}