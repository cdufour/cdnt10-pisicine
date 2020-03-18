// exo 7

(function() {

// Constants & globals
const END_POINT = 'http://api.opusidea.net/player'; // API REST
const RELOAD_TIME = 1000 * 60;
let players = null;

// DOM targetting
let txtFirstname        = document.getElementById('txtFirstname');
let txtLastname         = document.getElementById('txtLastname');
let txtTeam             = document.getElementById('txtTeam');
let selPosition         = document.getElementById('selPosition');
let btnSend             = document.getElementById('btnSend');
let listPlayers         = document.getElementById('listPlayers');

// Events
btnSend.addEventListener('click', sendPlayer);

// Functions
function getPlayers() {
    fetch(END_POINT).then(res => res.json()).then(res => {
        players = res.players;
        buildList();
    })
}

function buildList() {
    listPlayers.innerHTML = '';
    players.forEach(p => {
        let li = document.createElement('li');
        li.innerText = p.firstname + ' ' + p.lastname + ', ' + p.position;
        listPlayers.appendChild(li);
    })
}

function sendPlayer() {
    let player = {
        firstname: txtFirstname.value,
        lastname: txtLastname.value,
        team: txtTeam.value,
        position: selPosition.value
    };
    fetch(END_POINT, {
        method: 'post',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ player })
    }).then(res => {
        if (res.status == 201) getPlayers();
    })
}

// Init
getPlayers();
setInterval(getPlayers, RELOAD_TIME);

})()