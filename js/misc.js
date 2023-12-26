function debounce(fn, interval){
    let lastRun = 0;
    let pendingTimeout = null;
    return function handle(){
        if(Date.now() - lastRun > interval){
            lastRun = Date.now();
            fn(...arguments);
            pendingTimeout = null;
        }else if(!pendingTimeout){
            pendingTimeout = setTimeout(handle, lastRun + interval - Date.now() + 1)
        }
    }
}
let lastPos = 0;
function loop(){
    let pos =  document.documentElement.scrollTop;
    if(pos != lastPos){
        lastPos = pos;
        console.log("scroll", pos / getVh(90))
        document.documentElement.style.setProperty('--scroll-pos', `${pos}px`);
        document.documentElement.style.setProperty('--scroll-progress', `${pos / getVh(90)}`)
    }
    requestAnimationFrame(loop);
}
loop();

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
