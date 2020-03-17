// exo 4

(function() {

    // Constants
    let CALCULATIONS = [
        { operand1: 5, operand2: 2, operator: '+' },
        { operand1: 20, operand2: 4, operator: '*' },
        { operand1: 100, operand2: 16, operator: '-' },
        { operand1: 56, operand2: 2, operator: '*' },
    ];

    // DOM targetting
    let secCalculations     = document.getElementById('secCalculations');
    let secResults          = document.getElementById('secResults');

    // Functions
    function generateForm() {

        CALCULATIONS.forEach(c => {
            let d = document.createElement('div');
            d.innerHTML = `
            <span>${c.operand1} ${c.operator} ${c.operand2} = </span>
            <input type="text" class="answer" />
            `;
            secCalculations.appendChild(d);
        })

        // bouton de validation
        let b = document.createElement('button');
        b.innerText = 'Valider';
        b.addEventListener('click', getResults);
        secCalculations.appendChild(b);
    }

    function getResults() {
        let score = 0;
        let answers = document.getElementsByClassName('answer');
        for(let i=0; i<answers.length; i++) {
            if (answers[i].value == calculate(i)) score++;
        }
        secResults.innerText = 'Score: ' + score + '/' + answers.length;
    }

    function calculate(index) {
        let c = CALCULATIONS[index];
        let operator = c.operator;
        switch (operator) {
            case '+':
                return c.operand1 + c.operand2;
            case '-':
                return c.operand1 - c.operand2;
            case '*':
                return c.operand1 * c.operand2;
            case '/':
                return c.operand1 / c.operand2;
            default:
                return null;
        }
    }

    // Init
    generateForm();

})()