<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { ComplexArray } from "./fft/fft";
    import { snowflakeXs, snowflakeYs, snowflakeWidth, snowflakeHeight } from "./snowflake";
    /**
     * @type {HTMLCanvasElement}
     */
    let canvas;

    function sortComponents(xs, ys){
        let list = [];
        for(let i = 0; i < xs.length; i++){
            list.push([i, xs[i], ys[i], xs[i]**2 + ys[i] **2 ]);
        }
        return list.sort((a,b) => b[3]-a[3]);
    }

    onMount(() => {

        function resize(){
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        window.addEventListener("resize", resize)
        resize();

        let originalLength = 0;
        let skipJumps = true;
        /**
         * @type {[number, number, numer][]}
         */
        let comps = []; //list of components, in 

        function loadPts(xs, ys){
            if(xs.length !== ys.length) return;
            originalLength = xs.length;
            let freq = new ComplexArray(originalLength).map((value, i, n) => {
                value.real = xs[i]
                value.imag = ys[i];
            }).FFT();

            return sortComponents(freq.real, freq.imag);
        }
        let scale = Math.min(canvas.width, canvas.height) / snowflakeWidth * 0.8; //take up 80% of canvas space
        let _scaledXs = snowflakeXs.map(x => x * scale + canvas.width / 2 - snowflakeWidth * scale / 2);
        let _scaledYs = snowflakeYs.map(y => y * scale + canvas.height / 2 - snowflakeHeight * scale /2);

        comps = loadPts(_scaledXs, _scaledYs);
        
        /**
         * @type {CanvasRenderingContext2D}
         */
        //@ts-ignore
        let ctx = canvas.getContext("2d");
        if(!ctx) return;
        if(!canvas) return;

        let rawPtsX = [];
        let rawPtsY = [];

        let historyX = [];
        let historyY = [];

        let drawing = false;
        canvas.addEventListener("mousedown", () => {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            drawing = true;
            rawPtsX = [];
            rawPtsY = [];
            historyX = [];
            historyY = [];
        })
        document.addEventListener("mousemove", e => {
            if(!drawing) return;
            if(!canvas) return;
            let {left, top} = canvas.getBoundingClientRect();
            let x = e.clientX - left;
            let y = e.clientY - top;
            
            if(rawPtsX.length === 0){
                ctx.moveTo(x, y);
            }else{
                ctx.beginPath();
                ctx.moveTo(rawPtsX[rawPtsX.length - 1], rawPtsY[rawPtsY.length - 1])
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            rawPtsX.push(x);
            rawPtsY.push(y);
        });
        canvas.addEventListener("mouseup", () => {
            comps = loadPts(rawPtsX, rawPtsY);
            drawing = false;
            skipJumps = false;
            t = 0;
        })

        /**
         * 
         * @param  {number} t
         */
        function draw(t){
            let re = 0;
            let im = 0;

            let len = originalLength;
            let invSqLen = 1 / Math.sqrt(len);
            let mult = 2 * Math.PI * t / len;
            
            for(let [index, coeffReal, coeffIm] of comps){

                let phaseReal = Math.cos(mult * index);
                let phaseIm = Math.sin(mult * index);

                let cre  = (coeffReal * phaseReal - coeffIm * phaseIm) * invSqLen;
                let cim  = (coeffReal * phaseIm + coeffIm * phaseReal) * invSqLen;
                
                if(index != 0){
                    ctx.strokeStyle = "red";
                    ctx.beginPath();
                    ctx.moveTo(re, im);
                    ctx.lineTo(re + cre, im + cim);
                    ctx.stroke();
                }

                re += cre;
                im += cim;

            }
            return [re, im];
        }

        let t = 0;
        function step(){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.beginPath();
            ctx.strokeStyle = "black";
            for(let i = 0; i < historyX.length; i++){
                let sqdist = skipJumps ? (historyX[i] - historyX[i-1]) ** 2 + (historyY[i] - historyY[i-1]) ** 2 : 0;
                if(i == 0 || ( sqdist > 100)){
                    ctx.moveTo(historyX[i], historyY[i]);
                }else{
                    ctx.lineTo(historyX[i], historyY[i]);
                }
            }
            ctx.stroke();
            let [x, y] = draw(t);

            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fill();

            historyX.push(x);
            historyY.push(y);
            
            if(t % originalLength === 0){
                historyX = [];
                historyY = [];
            }
            t -= 1;
        }

        function loop(){
            if(!drawing){
                step();
            }
            requestAnimationFrame(loop);
        }
        loop();

    })
</script>
<style>
    canvas{
        width: 100%;
        height: 30vh;
        border-radius: 5px;
        background: rgb(254, 254, 254);
    }
</style>
<canvas bind:this={canvas}></canvas>