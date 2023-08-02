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