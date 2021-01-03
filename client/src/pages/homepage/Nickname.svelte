<script>
    import {navigate} from "svelte-routing";
    import {checkNickname} from "../../lib/api/room";
    import {enterLoading, nicknameTaken, someError} from "../../interactions/room";
    import SpinnerOverlay from "../../components/SpinnerOverlay.svelte";
    import ErrorFooter from "../../components/ErrorFooter.svelte";
    import {waitAtleast} from "../../lib/utils";
    import {MINIMUM_LOADING_TIME_SECS} from "../../lib/consts";
    import './basic-layout.css';
    import HomeLayout from "./HomeLayout.svelte";

    export const roomId = null;
    let nicknamePromise = null;
    let nickname = '';

    const handleNickname = async () => {
        nicknamePromise = waitAtleast(checkNickname(roomId, nickname), MINIMUM_LOADING_TIME_SECS);
        await nicknamePromise;
    };
</script>

<HomeLayout>
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
</HomeLayout>