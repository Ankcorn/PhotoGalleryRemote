window.onload = () => {
    const socket = io('http://192.168.1.72:4200')
    getClick((event) => {
        console.log('click', {button: event})
        socket.emit('click', {button: event})
        updateControls(event)
    });
}

const buttons = {
    back: "fa fa-backward fa-5x",
    pause: "fa fa-pause fa-5x",
    play: "fa fa-play fa-5x",
    shuffle: "fa fa-random fa-5x",
    reverse: "fa fa-exchange fa-5x",
    next: "fa fa-forward fa-5x"

}
function getClick(callback) {
    const controls = document.querySelector(".controls");
    controls.addEventListener("click", (data) => {
        const event = Object
            .keys(buttons)
            .find(el => data.target.className === buttons[el])
            
        callback(event)
    });
}

function updateControls(event) {
    if (event === 'pause') play();
    if (event === 'play') pause();
}

function pause() {
    const playButton = document.querySelector('.fa.fa-play.fa-5x')
    playButton.className = buttons.pause
}
function play() {
    const pauseButton = document.querySelector('.fa.fa-pause.fa-5x')
    pauseButton.className = buttons.play
}