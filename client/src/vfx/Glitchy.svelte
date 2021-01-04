<script>
    import './vfx.scss';
    import {glitchy} from '../stores/glitchy';
</script>

<!--<div class="vfx-container">-->
<!--    <div class="vfx-glitch" data-text="CYBERCOUNTESS">CYBERCOUNTESS</div>-->
<!--    <div class="vfx-glow">CYBERCOUNTESS</div>-->
<!--    <p class="vfx-subtitle">Engineer﹒Gamer﹒Shenaniganizer</p>-->
<!--</div>-->
{#if $glitchy}
    <div class="vfx-scanlines-container">
        <div class="vfx-scanlines"></div>
    </div>
{/if}
