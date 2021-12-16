const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 9000;

const __AUDIO_TYPE__ = {
    ROCK: "rock",
    JAZZ: "jazz",
    CINEMATIC: "cinematic",
    AFROBEAT: "afrobeat",
    JUJU: "juju",
    ARTISTE: "artiste"
}

function getDirectories(type){
    return fs.readdirSync(`./music/${type}`);
}



// const __ARTISTE_TYPE__ = {
//     ARTISTE: "artiste"
// }

// app.get(`/list`, (req, res) => {

// })

app.get(`/song`, (req, res) => {
    for(let type in __AUDIO_TYPE__) {
        console.log(getDirectories(__AUDIO_TYPE__[type]));
    }
    res.send("hello from server")
});

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})