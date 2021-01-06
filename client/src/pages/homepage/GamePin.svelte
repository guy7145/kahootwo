<script>
    import {navigate} from 'svelte-routing';
    import {checkHostSecret, checkRoomId} from "../../lib/api/room";
    import {enterLoading, someError, unknownGameId} from "../../interactions/room";
    import SpinnerOverlay from "../../components/SpinnerOverlay.svelte";
    import ErrorFooter from "../../components/ErrorFooter.svelte";
    import {waitAtleast} from "../../lib/utils";
    import {MINIMUM_LOADING_TIME_SECS} from "../../lib/consts";
    import './basic-layout.css';
    import {nickname} from "../../stores/game";

    export let onSuccess;
    export let gameId;
    let enterPromise = false;

    const handleEnter = async () => {
        enterPromise = waitAtleast(checkRoomId(gameId), MINIMUM_LOADING_TIME_SECS);
        if (await enterPromise) {
            onSuccess(gameId);
        } else { // this is patchy as hell:
            const secret = gameId;
            const gameIdFromSecret = await checkHostSecret(gameId);
            if (gameIdFromSecret) {
                gameId = gameIdFromSecret;
                nickname.set(secret);
                navigate('/host-lobby');
            }
        }
    };
</script>

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
