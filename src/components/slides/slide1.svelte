<style>
    #slide-1{
        display: grid;
        grid-template-rows: repeat(2, calc(45vh - var(--grid-size)));
        grid-template-columns: 0.4fr 1fr 1fr 0.4fr;
        grid-template-rows: 0.4fr 1fr 1fr 0.4fr;
        height: 90vh;
        width: 100%;
    
        opacity: calc(max(0, 1 - 1.2 * var(--scroll-progress-1)));
    
        position: fixed;
        z-index: 1;
    }
    #slide-1 .name-wrapper{
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: row;
        align-items: end;
    }
    #slide-1 h1{
        margin-left: 10px;
    }
    #slide-1 p.desc{
        
        grid-area: 3/2/4/3;
        margin: 0;
        margin-left: 10px;
        max-width: 40vw;
    }
    #slide-1 .selfie{
        grid-area: 2/3/4/4;
        text-align: center;
        
        background: url("/pfp.jpg") no-repeat;
        background-size: contain;
        background-position: right center;
    }
    
    @media screen and (max-width: 600px) {
        #slide-1{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        #slide-1 .selfie{
            height: 100px;
            flex: 1;
            width: 100%;
            background-position: center;
        }
        #slide-1 * {
            text-align: center;
            width: 100%;
            margin-bottom: 5vh;
        }
    }
</style>
<div id="slide-1">
    <div class="name-wrapper">
        <h1>Kelvin Chan</h1>
    </div>
    
    <div class="selfie">
    </div>
    <p class="desc">
        An avid STEM highschooler aiming to solve global problems.<br/>

        <span style="font-size: 1em; margin-top: 2em; display: inline-block" class="blink">Keep scrolling ⬇</span>
    </p>
</div>
<div style="height: 90vh; z-index: -1;"></div>