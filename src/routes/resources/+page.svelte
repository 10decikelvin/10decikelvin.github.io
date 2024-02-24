<script>
    import GenericPage from "../../components/GenericPage.svelte";
    let resources = [
        {
            title: "AES-GCM encryptor",
            description: "A browser-based file encryptor that encrypts and decrypts your files in line with the security standards set up by NIST. Use this as a much more secure alternative to 'passworded' zip files for data security.",
            href: "/resources/encrypt"
        },
        {
            title: "French DELF B1/2 Vocab (with audio!)",
            description: "1000+ somewhat commonly used french vocab that I compiled from doing reading comprehension activites, listening to podcasts etc. Includes audio files for french pronounciations. Available as an Anki deck.",
            href: "/resources/french"
        }
    ]
</script>
<GenericPage>
    <h1>Useful resources</h1>
    <p>As a student, I accumulate useful resources as I'm studying / coding / doing whatever and would love to share this with other people who might need it. Some resources are locked behind AES-GCM encryption for privacy reasons, and I promise it's properly secured so please only access stuff you are given access to.</p>
    <div class="resources">
        {#each resources as {title, description, href}}
            <div>
                <h2><a href={href}>{title}</a></h2>
                <p>{description}</p>
            </div>
        {/each}
    </div>
</GenericPage>