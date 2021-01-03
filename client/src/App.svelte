<script>
    import {Router, Link, Route} from "svelte-routing";
    import queryString from "query-string";
    import Home from './pages/homepage/GamePin.svelte';
    import Nickname from "./pages/homepage/Nickname.svelte";

    let query = window.location.search;
    let parsed = {};
    $: parsed = queryString.parse(query)

    export let url = "";
</script>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
<style>
</style>

<Router url={url}>
    <Route path="/game/:id" let:params>
        <Nickname gameId="{params.id}"/>
    </Route>
    <Route path="/" let:params>
        <Home pin="{parsed.pin || null}"/>
    </Route>
</Router>
