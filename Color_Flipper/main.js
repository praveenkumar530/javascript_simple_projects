const colors = ["Red", "Green", "Yellow", "Blue", "Purple"]
let type = false;
// false for simple mode , true for hexa mode 

const btn = document.getElementById("btnClickme");
const container = document.getElementsByClassName("container")[0]
const colorCode = document.getElementById("colorCode");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");

const navClick = document.getElementsByTagName('nav')[0]
navClick.addEventListener("click", pickTab);


btn.addEventListener("click", buttonClick)

setBackgroundColor("Red")
function buttonClick() {
     
    if (type) {
        setBackgroundColor(colors[Math.floor(Math.random() * 10) % colors.length])

    } else {
        setBackgroundColor(random_hex_color_code())
    }
}


function pickTab(e) {
    let text = e?.target.innerText;
    simple.classList = []
    hex.classList = []

    if (text === "Hex") {
        type = false;
        hex.classList.add("highlight")
    } else {
        type = true; 
        simple.classList.add("highlight")
    }
}


function setBackgroundColor(color) {
    container.style.backgroundColor = color
    colorCode.innerText = color

}


//#Source https://bit.ly/2neWfJ2 
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};



