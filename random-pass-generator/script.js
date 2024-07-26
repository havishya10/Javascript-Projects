let pass1 = document.getElementById("p-1");
let pass2 = document.getElementById("p-2");
let pass3 = document.getElementById("p-3");
let pass4 = document.getElementById("p-4");
let theme = document.getElementById("theme-mode");
let dark = false;
let charArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~'];

function randomPass() {
    let str = "";
    for (let i = 1; i < 11; i++) {
        let chr = charArray[Math.floor(Math.random() * charArray.length)];
        str += chr;
    }
    return str;

}

function generatePassword() {
    pass1.textContent = randomPass();
    pass2.textContent = randomPass();
    pass3.textContent = randomPass();
    pass4.textContent = randomPass();
}

theme.onclick = function() {
    if (dark === false) {
        lightTheme();
    } else {
        darkTheme();
    }
}

function lightTheme() {
    dark = true;
    let headParaEl = document.getElementById("head-para");
    let ellipseEl = document.getElementsByClassName("fa-ellipsis");
    for (let i = 0; i < ellipseEl.length; i++) {
        ellipseEl[i].style.color = "white";
    }
    headParaEl.style.color = "#6b7280";
    theme.innerHTML = "<i class='fa-solid fa-toggle-off'></i>";
    document.body.style.backgroundColor = "#ecfdf5";
    document.body.style.color = "#273549";


}

function darkTheme() {
    dark = false;
    let ellipseEl = document.getElementsByClassName("fa-ellipsis");
    for (let i = 0; i < ellipseEl.length; i++) {
        ellipseEl[i].style.color = "black";
    }
    let theme = document.getElementById("theme-mode");
    let headParaEl = document.getElementById("head-para");
    theme.innerHTML = "<i class='fa-solid fa-toggle-on'></i>";
    document.body.style.backgroundColor = "#1f2937";
    document.body.style.color = "white";
    headParaEl.style.color = "#d5d4d8";
}
