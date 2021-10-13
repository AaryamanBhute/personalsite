var app = document.getElementById('header');

var typewriter = new Typewriter(app, {
    loop: false,
    cursor: "",
    delay: 50
});
typewriter.typeString("<strong><span>&#8212;</span> Hey, I'm Aaryaman <span>&#8212;</span></strong>").start().pauseFor(2500)