<svelte:head>
    <title>Kelvin Chan</title>
    <!-- Include in every page -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>
<style lang="scss">
/**
Global
*/
:global{
    .invisible-container{
        visibility: none;
        position: absolute;
        top:0;
        left: 0;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    .invisible-sizer{
        display: block;
        width: 100vw;
        height: 100vh;
    }

    body, html{
        margin: 0;
        padding: 0;
        font-family: "Playfair Display", Georgia, 'Times New Roman', Times, serif;
    }
    *:not(code) {
        font-family: "Playfair Display", Georgia, 'Times New Roman', Times, serif;
    }
    input{
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        background: #fff;
    }
    input:hover, input:focus{
        background: #eee;
        transition: all 0.2s ease-out;
    }
    input[type="submit"]{
        cursor: pointer;
    }

    *{
        scrollbar-color: #00000050 #fff;
        scrollbar-width: thin;
    }

    .blink {
        animation: blinker 1s linear infinite;
    }

    @keyframes blinker {
        50% {
            opacity: 0.2;
        }
    }
    h1{
        font-weight: 500;
    }
    a{
        color: #000;
    }
    a::after{
        content: "open_in_new";
        font-family: 'Material Symbols Outlined';
        vertical-align: -0.2em;
        padding: 0 0.2em;
    }
}
/*
Specific to this component
*/

:root{
    --scroll-progress: 0;
}
.content{
    padding-top: 10vh;
    position: absolute;
    width: 100vw;
}
nav{
    position: fixed;
    top:0;
    width: 100%;
    display: block;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    height: 10vh;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    z-index: 2;
}
nav a{
    padding: 0 5vw;
    text-decoration: none;
    font-size: 1.4em;
    color: #000;
}
nav a::after{
    content:"";
    display: none;
}
.hover-underline{
    position: relative;
}
.hover-underline::after{
    content:" ";
    display: inline-block;
    position: absolute;
    left: 0;
    bottom:0;
    height: 1px;
    right: 100%;
    overflow: hidden;
    background: #000;
    transition: 0.3s ease-out;
}
.hover-underline:hover::after{
    right: 0;
    transition: 0.3s ease-out;
}
nav a:hover div::after{
    right: 0;
    transition: 0.3s ease-out;
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
.toasts{
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;
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

.toasts > button{
    background: #fff;
    border-radius: 5px;
    padding: 5px;
    margin: 20px;
    border: 1px solid black;
    display: block;
    position: relative;
    box-sizing: content-box;
}
.toasts > button::after{
    display: block;
    position: absolute;
    content: " ";
    height: 2px;
    background: #000;
    width: 100%;
    left: 0;
    bottom: 0;
    animation: shrink 2.5s linear ;
}
@keyframes shrink{
    0% {
        width: 100%;
    }
    100% {
        width: 0%;
    }
}
</style>
<script>
    import {setContext} from "svelte";
    import { blur, fly } from "svelte/transition";
    /**
     * @type {{msg: string, timeout: number, id: string}[]}
     */
    let toasts = [];
    const toastModule = {
        /**
         * 
         * @param {string} msg
         */
        add(msg){
            let id =  Math.random() + "";
            toasts.push({timeout: Date.now() + 5000, msg, id});
            toasts = toasts;
            setTimeout(() => toastModule.cancel(id), 2000)
            return id;
        },
        /**
         * 
         * @param {string}id
         */
        cancel(id){
            toasts = toasts.filter(t => t.id !== id);
            console.log(toasts);
        }
    }
    setContext("toast", toastModule)
</script>
<nav>
    <a href="/"><div class="hover-underline">Home</div></a>
    <a href="/gallery"><div class="hover-underline">Gallery</div></a>
    <a href="/resources"><div class="hover-underline">Resources</div></a>
</nav>
<div class="content">
    <slot />
    
    <!--<footer>
        <h1>That's it! (for now)</h1>
        <div>
            Wanna talk? Contact me <a href="mailto:10decikelvin@gmail.com">via my email</a>
        </div>
    </footer>-->
</div>
<div class="toasts">
{#each toasts as {msg, id} (id)}
    <button out:fly = {{duration:500, x: 200}} in:fly={{x: 200, duration: 500}} on:click={() => toastModule.cancel(id)}>
        {msg}
    </button>
{/each}
</div>