//@ts-check
let writeFile;
import("write-file-safe").then(_ => {
    writeFile = _.writeFile;
    main();
});
const { readFileSync } = require("fs");
const { readFile, rm } = require("fs/promises");
const list = require("recursive-readdir");
let data = JSON.parse(readFileSync("src/data.json", "utf-8"))

let SRC_DIR = "src";
let OUT_DIR = "out";

/**
 * @type {Map<string, string | Buffer>}
 */
let cache = new Map();

/**
 * 
 * @param {string} path 
 * @returns 
 */
async function compileFile(path){
    if(cache.has(path)){
        return cache.get(path)
    }
    let buf = await readFile(path);
    if(path.endsWith(".html.js")){
        let output = "";
        function out(str){
            output += str;
        }
        async function _import(projectPath){
            let contents = await compileFile(SRC_DIR + "/" + projectPath);
            if(contents instanceof Buffer){
                console.log(`Cannot import buffers, importing ${projectPath} from ${path}`);
            }
            return contents
        }
        
        let fn = new Function("out", "_import", "data", `return async function(){\n${
            buf.toString("utf-8")
        }\n}`)

        let promise = fn(out, _import, data);
        await promise();

        cache.set(path, output);
        await writeFile(path.replace(SRC_DIR, OUT_DIR).replace(".html.js", ".html"), output);
        return output;
    }else{
        //only for non css, js, html files
        cache.set(path, buf);
        await writeFile(path.replace(SRC_DIR, OUT_DIR), buf);
        return buf;
    }
}

async function main(){
    await rm(OUT_DIR, {recursive: true, force: true})
    for(let file of await list(SRC_DIR)){
        if(typeof file !== "string") continue;
        await compileFile(file);
    }
}
