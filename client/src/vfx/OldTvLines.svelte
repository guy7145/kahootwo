<script>
    import './vfx.scss';
    import {glitchy} from '../stores/glitchy';
</script>

{#if $glitchy}
    <div class="vfx-scanlines-container">
        <div class="vfx-scanlines"></div>
    </div>
{/if}
