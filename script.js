// Add active class to the current button (highlight it)
var header = document.getElementById("Navbar");
var navlinks = header.getElementsByClassName("nav-link");
for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
function hello(){
    alert("Mesage envoyer avec succes");
}

document.addEventListener("click",function (e) {
    if (e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'),)
        myModal.show();
    }
})

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_day(num){
    if (num===1){
        return "Lundi, ";
    }
    else if (num===2){
        return "Mardi, ";
    }
    else if (num===3){
        return "Mercredi, ";
    }
    else if (num===4){
        return "Jeudi, ";
    }
    else if (num===5){
        return "Vendredi, ";
    }
    else if (num===6){
        return "Samedi, ";
    }
    else if (num===7){
        return "Dimanche, ";
    }
}

function display_status(num){
    if(num>=8 && num<=18){
        return " Nous sommes Ouvert"
    }else{
        return " Nous sommes fermes"
    }
}

function display_color(num) {
    if (num >= 8 && num <= 18) {
        return "#0af51d"
    } else {
        return "#ff0000"
    }
}

function display_ct() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "-" + x.getDate() + "-" + x.getFullYear();
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    x2 = display_day(x.getDay())+""+x1
    x3 = " "+display_status(x.getHours( ))
    document.getElementById('ct').innerHTML = x2;
    document.getElementById('status').innerHTML = x3;
    document.getElementById('status').style.color = display_color(x.getHours( ))
    display_c();
}