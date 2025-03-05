function menuHomePageGameButtons(name) {
    let gameButtons = document.getElementsByClassName("item-2");
    for (let gb of gameButtons) {
        gb.style.display = "none";
    }

    let elem = document.getElementById(name);
    elem.style.display = "grid";

}

menuHomePageGameButtons("sectionHome")


let btMenuGameSnowman = document.getElementById('btHomeGameSnowman')
btMenuGameSnowman.addEventListener('click', () => {
    menuHomePageGameButtons('sectionGameSnowman')
})

let btMenuHome = document.getElementById("btMenuHome")
btMenuHome.addEventListener("click", () => {
    menuHomePageGameButtons("sectionHome")
})


function log() {
    console.log("clicked xD")
}

