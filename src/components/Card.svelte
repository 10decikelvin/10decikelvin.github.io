<script>
    export let title = "Card title"
</script>
<div>
    <h1>{title}</h1>
    <slot />
</div>
<style>
    div{
        border: 1px solid black;
        border-radius: 5px;
        padding: 2vh;
        background: #fff;
        margin: 5vh 2vh;
    }
    h1{
        margin-top: 0;
    }
</style>