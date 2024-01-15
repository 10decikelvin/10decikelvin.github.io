<script>
    let projects = [
        {
            "title": "International Student Science Fair",
            "href": "/html/placeholder.html",
            "description": "Led a team of 25 students to help organise cultural events, opening ceremony and social media in the ISSF2023",
            "tags": ["leadership", "stem-education"]
        },
        {
            "title": "Aharmonic magnetic oscillators",
            "href": "/html/placeholder.html",
            "description": "Studying the relation between amplitude and period for a system of two neodymium magnets.",
            "tags": ["physics", "EM", "opencv"]
        },{
            "title": "Project Odyssey",
            "href": "/html/placeholder.html",
            "description": "Programmed and built a self-driving robot car with teammates at Project Odyssey, winning the Droid Racing Competition 2023!",
            "tags": ["ai", "machine-vision", "hardware-engineering"]
        },{
            "title": "QR-Vote",
            "href": "/html/placeholder.html",
            "description": "Scan a QR code to vote for an artwork! Website built for my school's art showcase in 2021.",
            "tags": ["webdev", "nodejs"]
        }
    ]
</script>
<style>
    
/* Argh pesky variable height container*/
#slide-3{
    z-index: 2;
    position: relative;
}
#slide-3 h1{
    text-align: center;
    width: max-content;
    margin: auto;
}
.projects{
    margin: auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.projects div{
    border: 1px solid #000;
    background: #fff;
    width: 30vw;
    min-width: 350px;
    display: inline-block;
    padding: 2vw;
    border-radius: 1vh;
    margin: 2vw 0;
}
.projects div h2{
    margin-top: 0;
    font-size: 1.2em;
}
#slide-3 a.seemore{
    text-align: center;
    width: 100%;
    display: block;
    cursor: pointer;
    padding: 5vh 0;
}
@media screen and (max-width: 600px) {
    #slide-3 .projects div{
        margin: 5vh 10vw;
    }
}
</style>
<div id="slide-3">
    <h1>Projects</h1>
    <div class="projects">
        {#each projects as {title, href, description, tags}}
            <div>
                <h2>
                    <a href="{href}">{title}</a>
                </h2>
                <p>
                    {description}
                </p>
                <span>
                    {#each tags as tag}
                    <i>#{tag}</i>
                    {/each}
                </span>
            </div>
        {/each}
        <a href="/html/placeholder.html" class="seemore">See more projects</a>
    </div>
</div>