<script>
    import './vfx.scss';
    import {glitchy} from '../stores/glitchy';
</script>

<div class="{$glitchy ? 'vfx-container' : 'no-vfx-container'}">
    <slot/>
</div>
