let box = document.querySelector("#inputBox");
document.querySelector(".zero").addEventListener("click", () => add("0"));
document.querySelector(".one").addEventListener("click", () => add("1"));
document.querySelector(".two").addEventListener("click", () => add("2"));
document.querySelector(".three").addEventListener("click", () => add("3"));
document.querySelector(".four").addEventListener("click", () => add("4"));
document.querySelector(".five").addEventListener("click", () => add("5"));
document.querySelector(".six").addEventListener("click", () => add("6"));
document.querySelector(".seven").addEventListener("click", () => add("7"));
document.querySelector(".eight").addEventListener("click", () => add("8"));
document.querySelector(".nine").addEventListener("click", () => add("9"));
document.querySelector(".dot").addEventListener("click", () => add("."));
document.querySelector(".persent").addEventListener("click", () => add("%"));


document.querySelector(".plus").addEventListener("click", () => add("+"));
document.querySelector(".subs").addEventListener("click", () => add("-"));
document.querySelector(".multy").addEventListener("click", () => add("*"));
document.querySelector(".divide").addEventListener("click", () => add("/"));


function add(value) {
    if (box.value === "0") {
        box.value = value;
    } else {
        box.value += value;
    }
}


document.querySelector(".equal").addEventListener("click", () => {
    try {
        box.value = eval(box.value);
    } catch {
        box.value = "Error";
    }
});


document.querySelector(".ac").addEventListener("click", () => {
    box.value = "0";
});


document.querySelector(".del").addEventListener("click", () => {
    box.value = box.value.slice(0, -1) || "0";
});


document.querySelector(".plussubs").addEventListener("click", () => {
    if (box.value.startsWith("-")) {
        box.value = box.value.slice(1);
    } else {
        box.value = "-" + box.value;
    }
});
