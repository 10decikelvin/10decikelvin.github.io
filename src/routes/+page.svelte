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
    /*Footer*/
    footer{
        position: sticky;
        top: 10vh;
        z-index: 2;
        height: 90vh;
        border-top: 1px solid #000;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    footer a{
        color: #000;
    }
    footer h1{
        margin-top: 10vh;
        margin-bottom: 0;
    }
    footer div{
        padding: 10vh 0;
    }
</style>
<Slide1></Slide1>
<Slide2 achievements={data.achievements}></Slide2>
<Slide3></Slide3>
<footer>
    <h1>That's it! (for now)</h1>
    <div>
        Wanna talk? Contact me <a href="mailto:10decikelvin@gmail.com">via my email</a>
    </div>
</footer>