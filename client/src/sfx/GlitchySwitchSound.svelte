<script>
    import {Howl} from 'howler';
    import {glitchy} from "../stores/glitchy";

    const sound = new Howl({
        src: 'audio/sounds/noise-effect.wav',
        autoplay: false,
        loop: false,
        volume: 0.2,
    });

    $: if ($glitchy) {
        sound.play();
    }
</script>
