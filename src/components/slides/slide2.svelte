<script>
    /**
     * @type {{year: number, title:string, id:string}[]}
     */
    export let achievements;
    $: years = [... new Set(achievements.map(a => a.year))].sort((a,b) => b-a);
</script>
<style>
    #slide-2{
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
    }
    h1{
        margin-bottom: 5vh;
        margin-top: 5vh;
        height: 5vh;
        line-height: 5vh;
        position: sticky;
    }
    .horizontal-wrapper{
        display: flex;
        flex-direction: row;
        padding: 3vw;
    }
    .horizontal-wrapper > *{
        flex: 1;
    }
    .achievement-list ul {
        list-style-type: none;
        margin: 2vw;
        margin-top: 0;
        padding: 2vw;
        border-left: 1px solid grey;
    }
    .achievement-list li{
        margin-bottom: 1em;
    }
    .achievement-list h2{
        margin: 0;
    }
    /*Ignore this warning, there are indeed such elements*/
    .achievement-list a{
        font-weight: 550;
    }
    
    .preview-content{
        position: sticky;
        top: 25vh;
        margin-bottom: 25vh;
        width: 100%;
        min-height: 200px;
        height: max-content;
        border: 1px solid black;
        background: #fff;
        border-radius: 1vh;
    
        /**TODO: ADD ACTUAL CONTENT!!*/
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
    @media screen and (max-width: 600px) {
        .preview-container{
            display: none;
        }
    }
    @media screen and (min-width: 600px) {
        a::after{
            display: none;
        }
    }
</style>
<div id="slide-2">
    <h1>Notable Achievements</h1>
    <div class="horizontal-wrapper">
        <div class="achievement-list">
            {#each years as year}
                <h2>{year}</h2>
                <ul>
                {#each achievements.filter(a => a.year === year) as {title, id}}
                    <li>
                        {@html title.replace(/_(.*)_/, `<a href="/achievements/${id}">$1</a>`)}
                    </li>
                {/each}
                </ul>
            {/each}
        </div>
        <div class="preview-container">
            <div class="preview-content">
                <div>
                    <b> ⬅️ Click on <a href="#!">underlined items</a> to see details</b>
                <br>
                <br>
                (Oops... still under construction 🏗️)
            
                </div>
            </div>
        </div>
    </div>
</div>