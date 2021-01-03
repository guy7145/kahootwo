<script>
    import {navigate} from "svelte-routing";
    import {checkRoomId} from "../../lib/api/room";
    import {enterLoading, someError, unknownGameId} from "../../interactions/room";
    import SpinnerOverlay from "../../components/SpinnerOverlay.svelte";
    import ErrorFooter from "../../components/ErrorFooter.svelte";
    import {waitAtleast} from "../../lib/utils";
    import {MINIMUM_LOADING_TIME_SECS} from "../../lib/consts";
    import './basic-layout.css';
    import HomeLayout from "./HomeLayout.svelte";

    export let gameId = null;
    let enterPromise = false;

    const handleEnter = async () => {
        enterPromise = waitAtleast(checkRoomId(gameId), MINIMUM_LOADING_TIME_SECS);
        if (await enterPromise) {
            navigate(`/game/${gameId}`)
        }
    };
</script>

<HomeLayout>
    <input class="pin" placeholder="Game PIN" bind:value={gameId}/>
    <button class="enter" on:click={() => handleEnter()}>Enter</button>
    {#if enterPromise}
        {#await enterPromise}
            <SpinnerOverlay text={enterLoading}/>
        {:then res}
            {#if !res}
                <ErrorFooter errorMsg={unknownGameId}/>
            {/if}
        {:catch error}
            <ErrorFooter errorMsg={someError}/>
        {/await}
    {/if}
</HomeLayout>
