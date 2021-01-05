<script>
    import {Route, Router} from "svelte-routing";
    import {NotificationDisplay, notifier} from '@beyonk/svelte-notifications'
    import {notifications} from "./stores/notifications";
    import {glitchy} from "./stores/glitchy";

    import Home from "./pages/homepage/Home.svelte";
    import Lobby from "./pages/gameroom/Lobby.svelte";
    import OldTvLines from "./vfx/OldTvLines.svelte";
    import Music from "./sfx/Music.svelte";
    import GlitchySwitchSound from "./sfx/GlitchySwitchSound.svelte";

    export let url = "";
    let notify;
    $: notify = $glitchy ? notifier.danger : notifier.info;
    $: while ($notifications.length) {
        notify($notifications.pop(), 5000);
    }
</script>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">

<style>
</style>


<Music/>
<NotificationDisplay/>
<GlitchySwitchSound/>
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
