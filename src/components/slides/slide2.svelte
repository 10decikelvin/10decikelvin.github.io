<script>
    import Grid from "../Grid.svelte";
    /**
     * @type {{year: number, title:string, id:string}[]}
     */
    export let achievements;
    $: years = [... new Set(achievements.map(a => a.year))].sort((a,b) => b-a);
</script>
<style>
    #slide-2{
        width: 100vw;
        position: sticky;
        top: calc(100vh - var(--slide-2-height));
        height: 150vh;
    }
    .wrapper{
        max-width: 800px;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;;
    }
    h1{
        margin-bottom: 5vh;
        margin-top: 5vh;
        height: 5vh;
        line-height: 5vh;
        position: sticky;
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
</style>
<div id="slide-2">
    <Grid>
        <div class="wrapper">
            <h1>Notable Achievements</h1>
            <div class="achievement-list">
                {#each years as year}
                    <div class="year">
                        <h2>{year}</h2>
                        <ul>
                        {#each achievements.filter(a => a.year === year) as {title, id}}
                            <li>
                                {@html title.replace(/_(.*)_/, `<a href="/achievements/${id}">$1</a>`)}
                            </li>
                        {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    </Grid>
</div>