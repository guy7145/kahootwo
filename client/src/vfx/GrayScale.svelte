<script>
    import {glitchy} from "../stores/vfx";
</script>

<style>
    .grayish {
        z-index: 9;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: grayscale(0.8);
        pointer-events: none;
    }
</style>

{#if $glitchy}
    <div class="grayish"></div>
{/if}
