<script>
    import {Howl} from 'howler';
    import {NotificationDisplay, notifier} from '@beyonk/svelte-notifications'
    import {notifications} from "../stores/notifications";
    import {glitchy} from "../stores/glitchy";

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
        volume: 4,
    });

    let notify;
    $: notify = $glitchy ? notifier.danger : notifier.info;


    $: while ($notifications.length) {
        const notification = $notifications.pop();
        notify(notification.msg, notification.duration || DEFAULT_NOTIFICATION_TIME);
        $glitchy ? soundSpooky.play() : sound.play();
    }
</script>

<style>
    .enhance {
        font-size: 20px;
        font-weight: bolder;
    }
</style>

<div class="enhance">
    <NotificationDisplay/>
</div>
