<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import Slide1 from "../components/slides/slide1.svelte";
    import Slide2 from "../components/slides/slide2.svelte";
    import Slide3 from "../components/slides/slide3.svelte";
</script>
<style global>
    .content > *:not(#slide-1){
        position: relative;
        z-index: 2;
    }
    :root{
        --scroll-progress-1: 0;
        --scroll-progress-2: 0;
        --scroll-progress-3: 0;
    }
    /*override: blur less as progress 3 increases*/
    .content::before{
        filter: blur(calc(0.6vh * clamp(0.2,1 - 0.5 * var(--scroll-progress-2) - var(--scroll-progress-3), 1)));
    }
</style>
<Slide1></Slide1>
<Slide2 achievements={data.achievements}></Slide2>
<Slide3></Slide3>