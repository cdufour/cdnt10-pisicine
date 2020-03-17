// exo 6

(function() {

// Constants & globals
let players = null;

// DOM targetting
let tabPlayers     = document.querySelector('#tabPlayers tbody');
let txtSearch      = document.getElementById('txtSearch');

// Events
txtSearch.addEventListener('keyup', filterPlayers);

// Functions
function getPlayers() {
    fetch('players.json')
        .then(res => res.json())
        .then(res => {
            players = res;
            buildTable(players);
        })
}

function buildTable(players) {
    tabPlayers.innerHTML = '';
    players.forEach(p => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.firstname}</td>
            <td>${p.lastname}</td>
            <td>${p.team}</td>
            <td class="position">${p.position}</td>
        `;
        tabPlayers.appendChild(tr);
    })
}

function filterPlayers(e) {
    let input = e.target.value;
    if (input.length >= 2) {
        let filteredPlayers = players.filter(
            p => p.lastname.indexOf(input) != -1 || p.team.indexOf(input) != -1);
        buildTable(filteredPlayers);
    } else {
        buildTable(players);
    }
}

// Init
getPlayers();

})()