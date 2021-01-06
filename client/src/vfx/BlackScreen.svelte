<script>
    import {blackScreen} from "../stores/vfx";
    import {musicOn} from "../stores/sfx";

    $: musicOn.set(!$blackScreen)

    setTimeout(() => blackScreen.set(true), 6000);
    setTimeout(() => blackScreen.set(false), 12000);
</script>

<style>
    .screen {
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #000;
    }
</style>

{#if $blackScreen}
    <div class="screen"></div>
{/if}
