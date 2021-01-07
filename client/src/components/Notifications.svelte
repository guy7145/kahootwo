<script>
    import {Howl} from 'howler';
    import {NotificationDisplay, notifier} from '@beyonk/svelte-notifications'
    import {notifications} from "../stores/notifications";
    import {glitchy} from "../stores/vfx";

    const sound = new Howl({
        src: 'audio/sounds/notification.wav',
        autoplay: false,
        loop: false,
        volume: 1,
    });

    const soundSpooky = new Howl({
        src: 'audio/sounds/notification-spooky.wav',
        autoplay: false,
        loop: false,
        volume: 1,
    });

    let uiNotify;
    $: uiNotify = $glitchy ? notifier.danger : notifier.info;


    $: while ($notifications.length) {
            window.navigator.vibrate(150);

            const notification = $notifications.pop();
            uiNotify(notification.msg, notification.duration);
            $glitchy ? soundSpooky.play() : sound.play();
    }
</script>

<style>
    .enhance {
        font-size: 20px;
        font-weight: bolder;
        margin-bottom: 10px;
        position: absolute;
    }
</style>

<div class="enhance">
    <NotificationDisplay/>
</div>
