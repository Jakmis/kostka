var hody = [];

document.getElementById('game').addEventListener('click',
    function(){
        hod();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    document.getElementById('cube').src='img/kostka' + h + '.png';
    //Hod
    //document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>'; 
    document.getElementById('hod').innerHTML = h; 
    document.getElementById('hod').classList.remove('invisible');
    //Počet hodů
    //document.getElementById('result').innerHTML += 
        //'<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('pocet').innerHTML = hody.length;
    document.getElementById('pocet').classList.remove('invisible');
    //Součet hodů
    //document.getElementById('result').innerHTML += 
        //'<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('soucet').innerHTML = suma(hody);
    document.getElementById('soucet').classList.remove('invisible');
    //Průměr hodů
    //document.getElementById('result').innerHTML += 
        //'<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('prumer').innerHTML = average(suma(hody),hody.length);
    document.getElementById('prumer').classList.remove('invisible');
    //Nejvyšší hod
    //document.getElementById('result').innerHTML += 
        //'<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('max').innerHTML = maximum(hody);
    document.getElementById('max').classList.remove('invisible');
    //Nejnižší hod
    //document.getElementById('result').innerHTML += 
        //'<p>Nejnižší hod: ' + minimum(hody) + '</p>';
    document.getElementById('min').innerHTML = minimum(hody);
    document.getElementById('min').classList.remove('invisible');
    return h;
}
//Hra pro dva hráče
    //Hráči 
    var player1 = "Hráč 1"; 
    var player2 = "Hráč 2"; 
  
    // Funkce na změnu jména 
    function editNames() { 
        player1 = prompt('Změn jméno Hráči 1','Hráč 1'); 
        player2 = prompt('Změn jméno Hráči 2','Hráč 2'); 
  
        document.querySelector("p.Player1").innerHTML = player1; 
        document.querySelector("p.Player2").innerHTML = player2; 
    } 
  
    // Funkce na hod kostkou 
    function rollTheDice() { 
        setTimeout(function () { 
            var randomNumber1 = Math.ceil(Math.random() * 6); 
            var randomNumber2 = Math.ceil(Math.random() * 6);
            document.getElementById('cube1').src='img/kostka' + randomNumber1 + '.png';
            document.getElementById('result1').innerHTML = player1 + ' ' + 'hodil' + ' ' + randomNumber1
            document.getElementById('cube2').src='img/kostka' + randomNumber2 + '.png';
            document.getElementById('result2').innerHTML = player2 + ' ' + 'hodil' + ' ' + randomNumber2
            if (randomNumber1 === randomNumber2) { 
                document.getElementById('vysledek').innerHTML = 'Remíza!'; 
            } 
            else if (randomNumber1 < randomNumber2) { 
                document.getElementById('vysledek').innerHTML = (player2 + ' vyhrál!');
            } 
            else { 
                document.getElementById('vysledek').innerHTML = (player1 + ' vyhrál!'); 
            } 
        }, 100); 
    } 
