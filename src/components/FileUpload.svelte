<script>
    /**
     * @type {any}
     */
    export let files;
    /**
     * @type {HTMLInputElement}
     */
    let inputEle;
    let id = `file-input-${Math.random()}`;
</script>
<style>
    input{
        display: none;
    }
    label{
        background: #fff;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
        text-align: center; 
        display: flex;
        flex-direction: row;
        margin: 10px;
        box-sizing: content-box;
        max-width: 100%;
    }
    label b{
        padding: 10px;
        border-right: 1px solid black;
        margin-right: 10px;
        height: 100%;
    }
    label span{
        padding: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: left;
        white-space: nowrap;
    }
</style>
    <input type="file" id={id} bind:files accept="*/*" bind:this={inputEle}/>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <label for={id} tabindex="0" on:keypress={e => e.key === "Enter" && inputEle?.click()}>
        <b>Browse</b>
        <span>
        {#if files}
        {files[0].name}
        {:else}
        No file selected
        {/if}
        </span>
    </label>