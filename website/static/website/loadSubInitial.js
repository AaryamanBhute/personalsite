var app = document.getElementById('subtitleL');

var typewriter = new Typewriter(app, {
    loop: false,
    cursor: "",
    delay: 50
});
typewriter.pauseFor(1700).typeString('<strong>I am a</strong>').start()