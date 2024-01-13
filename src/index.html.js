out(/*html*/`
<!DOCTYPE html>
<html>
    <head>
        <!--This is one of the most disgusting embed stuff that ive written but ah well it works-->
        <s\cript> let data = ${JSON.stringify(data)}\</script>

        ${await _import("html/templates/head.html.js")}
        <script src="/js/index.js"></script>
    </head>
    <body>
        ${await _import("html/templates/navbar.html.js")}
        <div class="content">
            <div id="slide-1">
                <div class="name-wrapper">
                    <h1>Kelvin Chan</h1>
                </div>
                
                <div class="selfie">
                </div>
                <p class="desc">
                    An avid STEM highschooler aiming to solve global problems.<br/>

                    <span style="font-size: 1em; margin-top: 2em; display: inline-block" class="blink">Keep scrolling ⬇</span>
                </p>
            </div>
            <div style="height: 90vh; z-index: -1;"></div>
            <div id="slide-2">
                <h1>Notable Achievements</h1>
                <div class="horizontal-wrapper">
                    <div class="achievement-list">`)

let years = [... new Set(data.achievements.map(a => a.year))].sort((a,b) => b-a);
for(let year of years){
    out(`<h2>${year}</h2>`);
    out(`<ul>`)
    for(let ach of data.achievements.filter(a => a.year === year)){
        out(`<li>${ach.title.replace(/_(.*)_/, `<a href="/achievements/${ach.id}">$1</a>`)}</li>`)
    }
    out(`</ul>`)
}                    
                    
                        out(/*html*/`
                    </div>
                    <div class="preview-container">
                        <div class="preview-content">
                            <div>
                                <b> ⬅️ Click on <a href="#!">underlined items</a> to see details</b>
                            <br>
                            <br>
                            (Oops... still under construction 🏗️)
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide-3">
                <h1>Projects</h1>
                <div class="projects">`)

                for(let {title, href, description, tags, id} of data.projects){
                    out(/*html*/`
                    <div>
                        <h2>
                            <a href="${href}" id="${id}">${title}</a>
                        </h2>
                        <p>
                            ${description}
                        </p>
                        <span>
                            ${tags.map(t => `<i>#${t}</i>`).join(" ")}
                        </span>
                    </div>`)
}
                out(/*html*/`
                    <a href="/html/placeholder.html" class="seemore">See more projects</a>
                </div>
            </div>
            <footer>
                <h1>You've reached the end! (for now)</h1>
                <div>
                    Wanna talk? Contact me <a href="mailto:10decikelvin@gmail.com">via my email</a>
                </div>
            </footer>
        </div>
    </body>
</html>`)