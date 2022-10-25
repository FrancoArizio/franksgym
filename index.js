const displayMenu = () => {
    const menu = document.getElementById("dropdown")
    if (menu.style.display == "none") {
        menu.style.display = "flex"

    } else {
        menu.style.display = "none"
    }
}
