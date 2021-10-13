function run()
{


    var app = document.getElementById('subtitleR');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 50
    });

    const strs =  ['<strong>programmer</strong>', '<strong>web developer</strong>', '<strong>software developer</strong>', '<strong>computer scientist</strong>', '<strong>student</strong>']
    console.log(app)
    typewriter.deleteAll()
        .typeString(strs[0])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strs[1])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strs[2])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strs[3])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strs[4])
        .pauseFor(2000)
        .start();
}
setTimeout(run, 2000)