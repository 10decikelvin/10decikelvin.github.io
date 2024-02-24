<script>
    import Card from "../../components/Card.svelte";
import GenericPage from "../../components/GenericPage.svelte";
import UnderConstruction from "../../components/UnderConstruction.svelte";
    import EpiCycle from "../../components/epicycle/EpiCycle.svelte";

</script>
<GenericPage>
    <h1>Gallery</h1>
    <Card title="Epicycles and fourier transforms">
        <div>
            <EpiCycle></EpiCycle>
        </div>
        <p style="text-align: center">
            <b>Try draw your own shape! (desktop only)</b> <br/> This is a famous example of the Fourier transform, which allows us to decompose signals (in this case a drawing) into its various frequencies. Isn't it satisfying?
        </p>
    </Card>
    <Card title="Introduction to problem solving">
        <iframe title="FRC Math Club Presentation" src="https://youtube.com/embed/FmVXWGcCwH0" style="border:0px #ffffff none;" scrolling="no" height="400px" allowfullscreen></iframe>
        <p style="text-align: center">
            During February 2023, I was invited to be a guest speaker for the Fort Richmond Collegiate in Canada, where I covered some elementary olympiad math. For me, chatting to like-minded math enthusiasts and sharing math knowledge was a deeply enriching experience.
        </p>
    </Card>
</GenericPage>
<style>
    iframe{
        margin: auto;
        width: 60%;
        display: block;
    }
</style>