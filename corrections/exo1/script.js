(function() {

    // DOM targetting
    let txtChar         = document.getElementById('txtChar');
    let selNum          = document.getElementById('selNum');
    let btnGo           = document.getElementById('btnGo');
    let divResult       = document.getElementById('divResult');


    // Events
    btnGo.addEventListener('click', e => {
        divResult.innerText = ''; // clear input
        let concat = '';
        let nb = parseInt(selNum.value.trim());
        for (i=0; i<nb;i++) concat += txtChar.value + '\n';
        divResult.innerText = concat;
    })


})()