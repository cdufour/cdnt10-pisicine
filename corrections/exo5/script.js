// exo 5

(function() {

// Constants
// https://api.myjson.com/bins/10dkyq
// const QUOTES = [
//     { body: "Tout vient au point à qui sait attendre", topic: "Patience" },
//     { body: "Ad astra per aspera", topic: "Courage" },
//     { body: "An apple a day keeps the doctor away", topic: "Santé" },
//     { body: "Patience et longueur de temps font plus que force ni que rage", topic: "Patience" },
//     { body: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué", topic: "Patience" },
//     { body: "Un verre ça va, deux verres bonjour les dégâts", topic: "Santé" },
//     { body: "Omnia labor vincit", topic: "Courage" },
//     { body: "Qui veut voyager loin ménage sa monture", topic: "Patience" },
//     { body: "Test test test", topic: "Argent" },
// ];
const SERVER_URL = 'https://api.myjson.com/bins/10dkyq';
let QUOTES = null;
const INTERVAL_TIME = 2000; // 2 secondes
let interv = null;

// DOM targetting
let selTopic =      document.getElementById('selTopic');
let divQuote =      document.getElementById('divQuote');

// Events
selTopic.addEventListener('change', e => {
    clearInterval(interv);
    divQuote.innerText = '';
    let choice = e.target.value;
    if (choice != -1)
        interv = setInterval(() => getAndShowRandomQuote(choice), INTERVAL_TIME);
})

// Functions
function getTopics() {
    let topics = [];
    QUOTES.forEach(q => {
        if (topics.indexOf(q.topic) == -1) topics.push(q.topic); // évite les doublons
    })
    return topics;
}

function populateTopics() {
    getTopics().forEach(t => {
        let o = document.createElement('option');
        o.value = t; o.innerText = t;
        selTopic.appendChild(o);
    })
}

function getAndShowRandomQuote(topic) {
    let quotes = QUOTES.filter(q => q.topic == topic);
    let randomIndex = Math.floor(Math.random() * quotes.length);
    divQuote.innerText = quotes[randomIndex].body;
}

function getRemoteQuotes() {
    fetch(SERVER_URL)
        .then(res => res.json())
        .then(quotes => {
            QUOTES = quotes;
            populateTopics();
        })
}

// Init
getRemoteQuotes();
//populateTopics();

})()