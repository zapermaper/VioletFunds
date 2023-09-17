

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
}

document.getElementById("toggleDarkMode").addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

