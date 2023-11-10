var toggleLinks = document.getElementsByClassName("toggleLink");

for (var i = 0; i < toggleLinks.length; i++) {
    toggleLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        var text = this.nextElementSibling;
        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    });
}