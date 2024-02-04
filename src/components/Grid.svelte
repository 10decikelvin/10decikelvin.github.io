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

        background-size: 18vh 18vh;
        background-image:
        linear-gradient(to right, #ccc 2px, transparent 2px),
        linear-gradient(to bottom, #ccc 2px, #fff 2px);
        background-attachment: fixed;
        background-position: 0 10vh;
    }
    .wrap{
        width: 100%;
        height: 100%;
        position: relative;
        backdrop-filter: blur(10px);
        border-top: 1px solid black;
    }
</style>