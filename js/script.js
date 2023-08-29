function myFunction() {
    var showHide = document.getElementById("playlist-content");
    var myButton = document.getElementById("myButton");
    if (showHide.style.display === "none") {
        showHide.style.display = "block";
        showHide.classList.remove("opacity-0");
        showHide.classList.add("opacity-100");
        myButton.classList.remove("rotate-90");
    } else {
        showHide.style.display = "none";
        showHide.classList.add("opacity-0");
        myButton.classList.add("rotate-90");
    }
}

