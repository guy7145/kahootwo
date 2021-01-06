<script>
    import {Route, Router} from "svelte-routing";
    import {glitchy} from "./stores/vfx";

    import Home from "./pages/homepage/Home.svelte";
    import Lobby from "./pages/gameroom/Lobby.svelte";
    import HostLobby from "./pages/host-lobby/HostLobby.svelte";
    import OldTvLines from "./vfx/OldTvLines.svelte";
    import Music from "./sfx/Music.svelte";
    import GlitchySwitchSound from "./sfx/GlitchySwitchSound.svelte";
    import Notifications from "./components/Notifications.svelte";
    import BlackScreen from "./vfx/BlackScreen.svelte";

    export let url = "";
</script>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">

<style>
</style>


<Music/>
<Notifications/>
<GlitchySwitchSound/>
<BlackScreen/>
<Router url={url}>
    <Route path="/game" let:params> <!-- Enter game pin -->
        <Lobby/>
    </Route>
    <Route path="/join" let:params> <!-- Nickname entry -->
        <Home/>
    </Route>
    <Route path="/instructions" let:params> <!-- Player Lobby Text -->
        <Home/>
    </Route>
    <Route path="/lobby" let:params> <!-- Host's Lobby -->
        <HostLobby/>
    </Route>
    <Route path="/" let:params> <!-- Game pin entry -->
        <Home/>
    </Route>
</Router>
<label style="position: absolute; top: 0; left: 0">
    vfx <input type="checkbox" bind:checked={$glitchy}/>
</label>
<OldTvLines/>
