<script>
    import Spinner from "./Spinner.svelte";
</script>

<style>
    .container {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.7);

        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .subtitle {
        color: rgb(255, 255, 255);
        font-size: 1.25rem;
        font-weight: bold;
        margin: 1.25rem 0 0;
        padding: 0 0.5rem;
    }
</style>

<div class="container">
    <Spinner/>
    <div class="subtitle">Connecting to Kahoot!</div>
</div>
