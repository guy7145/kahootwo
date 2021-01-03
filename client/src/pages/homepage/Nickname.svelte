<script>
    import {checkNickname} from "../../lib/api/room";
    import {enterLoading, nicknameTaken, someError} from "../../interactions/room";
    import SpinnerOverlay from "../../components/SpinnerOverlay.svelte";
    import ErrorFooter from "../../components/ErrorFooter.svelte";
    import {waitAtleast} from "../../lib/utils";
    import {MINIMUM_LOADING_TIME_SECS} from "../../lib/consts";
    import './basic-layout.css';

    export let gameId, nickname = '', onSuccess;
    let nicknamePromise = null;

    const handleNickname = async () => {
        nicknamePromise = waitAtleast(checkNickname(gameId, nickname), MINIMUM_LOADING_TIME_SECS);
        if (await nicknamePromise) {
            onSuccess();
        }
    };
</script>

<input class="pin" placeholder="Nickname" bind:value={nickname}/>
<button class="enter" on:click={() => handleNickname()}>OK, go!</button>
{#if nicknamePromise}
    {#await nicknamePromise}
        <SpinnerOverlay text={enterLoading}/>
    {:then res}
        {#if !res}
            <ErrorFooter errorMsg={nicknameTaken}/>
        {/if}
    {:catch error}
        <ErrorFooter errorMsg={someError}/>
    {/await}
{/if}
