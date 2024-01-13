// teh data.json is already loaded in the global varibale data thanks to some really bad hacky code
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".achievement-list").addEventListener("click", e => {
        console.log("h")
        if(getVw(100) > 600){
            e.preventDefault();
            console.log(e.target)
            //do the fancy show-to-side thing
            if(data.achievements.find(ach => ach.id === e.target.id)){
                console.log(e.target.id)
            }
        }else{
            //just open the achievement
        }
    });
});
let heights = [1,1,1];
window.addEventListener("load", () => {
    heights = ["#slide-1", "#slide-2", "#slide-3"].map(s => document.querySelector(s).clientHeight);
    console.log(heights);
})

let lastPos = 0;
function scale(pos, topPos, height){
    return Math.max(0, Math.min(1, (pos - topPos) / height))
}
function loop(){
    let pos =  document.documentElement.scrollTop;
    if(pos != lastPos){
        lastPos = pos;
        document.documentElement.style.setProperty('--scroll-progress', `${pos / getVh(90)}`)
        document.documentElement.style.setProperty('--scroll-progress-1', `${scale(pos, 0, heights[0])}`)
        document.documentElement.style.setProperty('--scroll-progress-2', `${scale(pos, heights[0], heights[1])}`)
        document.documentElement.style.setProperty('--scroll-progress-3', `${scale(pos, heights[0] + heights[1], heights[2])}`)

    }
    requestAnimationFrame(loop);
}
loop();