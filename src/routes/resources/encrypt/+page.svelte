<script>
    import FileUpload from "../../../components/FileUpload.svelte";
    import GenericPage from "../../../components/GenericPage.svelte";
    import Grid from "../../../components/Grid.svelte";
    import { getContext } from "svelte";
    let toast = getContext("toast")

    let enc = new TextEncoder();
    /**
     * @type {undefined | File[]}
     */
    let files;
    let key = "";
    /**
     * @type {{name: string, url: string}[]}
     */
    let outputs = [];
    //COULD a file be decrypted
    $: canDecrypt = !files || (files[0].name.endsWith(".enc"));
    $: canEncrypt = !files || (!files[0].name.endsWith(".enc"));
    /**
     * Join array buffers
     * @param {ArrayBuffer} buffer1
     * @param {ArrayBuffer} buffer2
     */
    function joinBuffers(buffer1, buffer2) {
        var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
        tmp.set(new Uint8Array(buffer1), 0);
        tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
        return tmp.buffer;
    };
    /**
     * 
     * @param {SubmitEvent} e 
     */
    async function onSubmit(e){
        if(!files) {
            toast.add("No file selected");
            return;
        }
        if(e.submitter?.id === "encrypt"){
            const iv = window.crypto.getRandomValues(new Uint8Array(64));
            const salt = window.crypto.getRandomValues(new Uint8Array(64));
            const masterKey = await window.crypto.subtle.importKey("raw", enc.encode(key), "PBKDF2", false, ["deriveKey"])
            const cryptoKey = await window.crypto.subtle.deriveKey({name: "PBKDF2", hash: "SHA-256", salt, iterations: 8192}, masterKey, {name: "AES-GCM", length: 256}, false, ["encrypt", "decrypt"]);
            let result =  await window.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: iv },
                cryptoKey,
                await files[0].arrayBuffer()
            );
            const output = joinBuffers(iv, joinBuffers(salt, result));
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(new Blob([output]));
            link.download = files[0].name + ".enc";
            link.click();
        }else if(e.submitter?.id === "decrypt"){
            let arrayBuf = await files[0].arrayBuffer();
            let iv = arrayBuf.slice(0, 64);
            let salt = arrayBuf.slice(64, 128);

            const masterKey = await window.crypto.subtle.importKey("raw", enc.encode(key), "PBKDF2", true, ["deriveKey", "deriveBits"])
            const cryptoKey = await window.crypto.subtle.deriveKey({name: "PBKDF2", hash: "SHA-256", salt, iterations: 8192}, masterKey, {name: "AES-GCM", length: 256}, true, ["encrypt", "decrypt"]);
            
            try{
                let output =  await window.crypto.subtle.decrypt(
                    { name: "AES-GCM", iv: iv },
                    cryptoKey,
                    arrayBuf.slice(128)
                );
                

                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(new Blob([output]));
                link.download = files[0].name.replace(/\.enc$/, "");
                link.click();
            }catch(e){
                console.log("caught")
                toast.add("Incorrect decryption key.")
                debugger;
            }
        }
        
    }
</script>
<style>
    *{
        text-align: center;
    }
    h1{
        margin-top: 0;
    }
    form{
        width: min-content;
        margin: auto;
        display: flex;
        flex-direction: column;
        min-width: clamp(50vw, 600px, 90vw);
        align-items: stretch;
        justify-content: center;
        min-height: 90vh;
        padding: 0;
    }

    input{
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
    .buttons{
        display: flex;
        flex-direction: row;
    }
    .buttons > input {
        flex-grow: 1;
    }
</style>
<Grid>
<form on:submit={onSubmit}>
    <h1><b>AES-GCM</b> File Encrypt</h1>
    <FileUpload bind:files></FileUpload>
    <input type="text" placeholder="Encryption Key" bind:value={key}/>
    <!---->
    <div class="buttons">
        <input type="submit" id="encrypt" value="Encrypt" disabled= {!canEncrypt} style:text-decoration={canEncrypt ? "none" : "line-through"} title={canEncrypt ? "" : ".enc files can be decrypted, not encrypted."}/>
        <input type="submit" id="decrypt" value="Decrypt" disabled = {!canDecrypt} style:text-decoration={canDecrypt ? "none" : "line-through"} title={canDecrypt ? "" : "Only .enc files produced by this webpage can be decrypted."}/>
    </div>
</form>
</Grid>