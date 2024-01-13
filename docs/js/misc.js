//some shenanigans about what 100vh actually is
let div = document.createElement("div");
let div2 = document.createElement("div2");
document.addEventListener("DOMContentLoaded", () => {
    div.appendChild(div2);
    document.body.appendChild(div);
    div.classList.add("invisible-container");
    div2.classList.add("invisible-sizer");

    console.log(div2.clientHeight)
})
function getVh(vh){
    return div2.clientHeight / 100 * vh;
}
function getVw(vw){
    return div2.clientWidth / 100 * vw;
}
