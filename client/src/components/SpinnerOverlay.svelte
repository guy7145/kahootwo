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
</style>

<div class="container">
    <Spinner/>
    <div>Connecting to Kahoot!</div>
</div>
