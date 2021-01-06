<script>
    import {Howl} from 'howler';
    import {glitchy} from "../stores/vfx";

    const sound = new Howl({
        src: 'audio/sounds/noise-effect.wav',
        autoplay: false,
        loop: false,
        volume: 0.1,
    });

    $: if ($glitchy) {
        sound.play();
    }
</script>
