let toggleLinks = document.getElementsByClassName("toggleLink");

for (let i = 0; i < toggleLinks.length; i++) {
    toggleLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        let text = document.getElementsByClassName("toggleText")[i];
        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    });
}