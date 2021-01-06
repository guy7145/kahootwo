<script>
    import {Howl} from 'howler';
    import {glitchy} from "../stores/vfx";
    import {musicOn} from "../stores/sfx";

    const normalPath = 'audio/music/answer_60sec.webm';
    const spookyPath = 'audio/music/answer_60sec-spooky.webm';

    const getSound = path => new Howl({
        src: path,
        autoplay: false,
        loop: true,
        volume: 0.5,
    });

    const normalSound = getSound(normalPath);
    const spookySound = getSound(spookyPath);

    normalSound.mute(true);
    spookySound.mute(true);

    $: if ($glitchy) {
        normalSound.mute(true);
        spookySound.mute(false);
    } else {
        normalSound.mute(false);
        spookySound.mute(true);
    }

    $: if ($musicOn) {
        normalSound.play();
        spookySound.play();
    } else {
        normalSound.pause();
        spookySound.pause();
    }
</script>

