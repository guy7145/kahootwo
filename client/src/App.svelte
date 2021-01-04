<script>
    import {Route, Router} from "svelte-routing";
    import {NotificationDisplay, notifier} from '@beyonk/svelte-notifications'
    import {notifications} from "./stores/notifications";
    import {glitchy} from "./stores/glitchy";

    import Home from "./pages/homepage/Home.svelte";
    import Lobby from "./pages/gameroom/Lobby.svelte";
    import OldTvLines from "./vfx/OldTvLines.svelte";

    export let url = "";
    $: while ($notifications.length) {
        notifier.warning($notifications.pop(), 10000) // i'm using 'warning' for it's color
    }
</script>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">

<style>
</style>


<NotificationDisplay/>
<Router url={url}>
    <Route path="/game" let:params>
        <Lobby/>
    </Route>
    <Route path="/" let:params>
        <Home/>
    </Route>
</Router>
<label style="position: absolute; top: 0; right: 0">
    glitchy <input type="checkbox" bind:checked={$glitchy}/>
</label>
<OldTvLines/>
