<script>
    import {Route, Router} from "svelte-routing";
    import Home from "./pages/homepage/Home.svelte";
    import Lobby from "./pages/gameroom/Lobby.svelte";

    export let url = "";
</script>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
<style>
</style>

<Router url={url}>
    <Route path="/game" let:params>
        <Lobby/>
    </Route>
    <Route path="/" let:params>
        <Home/>
    </Route>
</Router>
