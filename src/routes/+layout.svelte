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
/*
Specific to this component
*/

:root{
    --scroll-progress: 0;
}
.content{
    padding-top: 10vh;
    position: absolute;
    background: rgba(255, 255, 255, 0.85);
    --grid-size: 15vh;
    width: 100%;
}
.content::before{
    filter: blur(0.4vh);
    z-index: -2;
    content:"";
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;

    background-size: var(--grid-size) var(--grid-size);
    background-image:
      linear-gradient(to right, #000 0.2vh, transparent 0.2vh),
      linear-gradient(to bottom, #000 0.2vh, transparent 0.2vh);
    background-attachment: fixed;
    background-position: 0 10vh;
    
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
    z-index: 10;
}
nav a{
    padding: 0 5vw;
    text-decoration: none;
    font-weight: 300;
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
nav a:not(.menu):hover div::after{
    right: 0;
    transition: 0.3s ease-out;
}

nav a.menu div{
    font-size: 1.1em;
    display: inline;
    vertical-align: 0.145em;
    color: #000;/*
    font-family: 'Noto Color Emoji', sans-serif"*/
}
nav a.menu{
    transition: 0.5s ease-in-out;
}
nav a.menu:hover{
    transform: rotate(180deg);
}
/*Footer*/
footer{
    border-top: 1px solid #000;
    background: #fff;
    text-align: center;
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
</style>
<nav>
    <a href="/" class="menu"><div>❄</div></a>
    <a href="./placeholder"><div class="hover-underline">Who</div></a>
    <a href="./placeholder"><div class="hover-underline">What</div></a>
    <a href="./placeholder"><div class="hover-underline">Why</div></a>
</nav>
<div class="content">
    <slot />
    
    <footer>
        <h1>You've reached the end! (for now)</h1>
        <div>
            Wanna talk? Contact me <a href="mailto:10decikelvin@gmail.com">via my email</a>
        </div>
    </footer>
</div>
