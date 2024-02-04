<script>
    import Grid from "../Grid.svelte";

</script>
<style>
    #slide-1{
        position: sticky;
        top: 10vh;
    }
    .wrapper{
        display: grid;
        grid-template-rows: repeat(2, calc(45vh - 18vh));
        grid-template-columns: 0.4fr 1fr 1fr 0.4fr;
        grid-template-rows: 0.4fr 1fr 1fr 0.4fr;
        width: 100vw;

        height: 90vh;
        
    }
    .name-wrapper{
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: row;
        align-items: end;
    }
    h1{
        margin-left: 10px;
    }
    p.desc{
        
        grid-area: 3/2/4/3;
        margin: 0;
        margin-left: 10px;
        max-width: 40vw;
    }
    .selfie{
        grid-area: 2/3/4/4;

        background: url("/pfp.jpg") no-repeat;

        background-size: contain;

        background-position: right center;
    }
    
    @media screen and (max-width: 600px) {
        .wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        .selfie{
            height: 100px;
            flex: 1;
            width: 100%;
            background-position: center;
        }
        * {
            text-align: center;
            width: 100%;
            margin-bottom: 5vh;
        }
    }
</style>
<div id="slide-1">
    <Grid>
        <div class="wrapper">
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
    </Grid>
</div>