<script>
    import './vfx.scss';
    import {glitchy} from '../stores/vfx';
</script>

{#if $glitchy}
    <div class="vfx-scanlines-container">
        <div class="vfx-scanlines"></div>
    </div>
{/if}
