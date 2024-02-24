<script>
</script>
<div class="parent">
    <div class="bg"></div>
    <div class="wrap">
        <slot />
    </div>
</div>
<style>
    .parent{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .bg{
        content:"";
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;

        background-size: 15vh 15vh;
        background-image:
        linear-gradient(to right, #ddd 0.5vw, transparent 0.5vw),
        linear-gradient(to bottom, #ddd 0.5vw, #fff 0.5vw);
        background-attachment: fixed;
        background-position: 0 10vh;
    }
    .wrap{
        width: 100%;
        height: 100%;
        position: relative;
        backdrop-filter: blur(0.6vw);
        border-top: 1px solid black;
    }
</style>