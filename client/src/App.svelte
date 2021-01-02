<script>
    import { Router, Link, Route } from "svelte-routing";
    import queryString from "query-string";
    import Home from './pages/Home.svelte';

    let query = window.location.search;
    let parsed = {};
    $: parsed = queryString.parse(query)

    export let url = "";
</script>

<style>
</style>

<Router url={url}>
    <Route path="/game/:id" let:params>
        <div>params.id</div>
    </Route>
    <Route path="/" let:params>
        <Home pin="{parsed.pin || null}"/>
    </Route>
</Router>
