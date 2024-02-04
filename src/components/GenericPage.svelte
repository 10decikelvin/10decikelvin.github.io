<script>
    import Grid from "./Grid.svelte";

</script>
<Grid>
    <div>
        <slot />
    </div>
</Grid>
<style>
    div{
        max-width: 800px;
        margin: auto;
        padding: 10px;
    }
</style>