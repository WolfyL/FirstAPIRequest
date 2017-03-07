var request = new XMLHttpRequest();
var table = document.getElementById('temperature');

request.onreadystatechange = function() { //si l'état change alors:
    if (request.readyState == 4) { // ==4 => requete terminée
        if (request.status == 200) { //status 200 == tout s'est bien passé
            var temps = JSON.parse(request.responseText);
            console.log(temps);
            let temperature_C = (temps.main.temp)-273.15;
            res = Math.round(temperature_C);
            document.write("Il fait actuellement " + res + " degrés dans votre ville :)");
        } else {
            console.log("Erreur pendant le chargement de la page.\n");
        }
    }
}



function getCity() {
    let city = document.getElementById("ville").value;
    request.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8a13c31cbaf64280fa5628b70253e332", true);
    request.send();
}
