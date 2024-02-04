<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import Slide1 from "../components/slides/slide1.svelte";
    import Slide2 from "../components/slides/slide2.svelte";
    import Slide3 from "../components/slides/slide3.svelte";
</script>
<style global>
    :root{
        --slide-1-height: 90vh;
        --slide-2-height: 90vh;
        --slide-3-height: 90vh;
    }
    .content{
        scroll-behavior: smooth;
    }
</style>
<Slide1></Slide1>
<Slide2 achievements={data.achievements}></Slide2>
<Slide3></Slide3>