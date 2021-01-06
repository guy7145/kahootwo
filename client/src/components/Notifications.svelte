<script>
    import {Howl} from 'howler';
    import {NotificationDisplay, notifier} from '@beyonk/svelte-notifications'
    import {notifications} from "../stores/notifications";
    import {glitchy} from "../stores/vfx";

    const DEFAULT_NOTIFICATION_TIME = 5000;

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

    let notify;
    $: notify = $glitchy ? notifier.danger : notifier.info;


    $: while ($notifications.length) {
            window.navigator.vibrate(150);

            const notification = $notifications.pop();
            notify(notification.msg, notification.duration || DEFAULT_NOTIFICATION_TIME);
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
