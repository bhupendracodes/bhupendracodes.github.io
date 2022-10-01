function k() {
    alert("ok")
}



function fetch(a) {
    var url = "https://getmongodata.vercel.app/api/index";

    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.send();
    req.onreadystatechange = processRequest;

    function processRequest(e) {
        if (req.readyState == 4 && req.status == 200) {
            // document.getElementById('play').setAttribute('onclick',dl);
            var j = JSON.parse(req.responseText);
            // document.getElementById('dll').setAttribute('href',resp.media_url);
            console.log(j[0])
            console.log(j[1])
            document.getElementById("last_rec").innerHTML = j[0].temperature+" °C";
            document.getElementById("last_rec_date").innerHTML = "Date: "+j[0].date;
            document.getElementById("last_rec_time").innerHTML = "Time: "+j[0].time+" hr";


            document.getElementById("morning").innerHTML = j[1].morning+" °C";
            document.getElementById("afternoon").innerHTML = j[1].afternoon+" °C";
            document.getElementById("evening").innerHTML = j[1].evening+" °C";
            document.getElementById("max").innerHTML = j[1].max_temp+" °C";
            document.getElementById("min").innerHTML = j[1].min_temp+" °C";
            document.getElementById("for_the_date").innerHTML ="For the date: "+ j[1].date;

        }
    }

}
