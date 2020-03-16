// exo3

(function() {

    // Constants
    const CITIES = [
        { name: 'Paris', population: 2187526 },
        { name: 'Marseille', population: 863310 },
        { name: 'Lyon', population: 516092 },
        { name: 'Toulouse', population: 479553 },
        { name: 'Toulon', population: 171000 },
        { name: 'Nice', population: 340017 },
        { name: 'Nîmes', population: 150610 },
        { name: 'Tournai', population: 147705 },
        { name: 'Palermo', population: 500000 },
    ];
    
    // DOM targetting
    let txtCity     = document.getElementById('txtCity');
    let listCities  = document.getElementById('listCities');
    let secDetails  = document.getElementById('secDetails');

    // Events
    txtCity.addEventListener('keyup', e => {
        let input = e.target.value;
        listCities.innerHTML = ''; // clear
        if (input.length >= 2) showResults(searchCity(input));
    })

    // Functions
    function searchCity(input) {
        return CITIES.filter(c => c.name.toLowerCase().startsWith(input.toLowerCase()));
    }

    function showResults(results) {
        results.forEach(r => {
            let c = document.createElement('li');
            c.innerText = r.name;
            c.addEventListener('click', showDetails);
            listCities.appendChild(c);
        })
    }

    function showDetails(e) {
        let city = CITIES.filter(c => c.name == e.target.innerText)[0];
        secDetails.innerHTML = `
            <h2>${city.name}</h2>
            <p>Population: ${city.population}</p>
        `;
        listCities.innerHTML = '';
        txtCity.value = '';
    }


})()