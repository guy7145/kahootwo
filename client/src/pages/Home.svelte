<script>
    import {checkNickname, checkRoomId} from "../lib/api/room";
    import SpinnerOverlay from "../components/SpinnerOverlay.svelte";
    import ErrorFooter from "../components/ErrorFooter.svelte";
    import {enterLoading} from "../interactions/room";
    import {waitAtleast} from "../lib/utils";

    const MINIMUM_WAIT_TIME_SECS = 1;

    export let roomId = null;
    let nickname = '';

    let enteredRoom = false;
    let currentPromise = false;

    const handleEnter = async () => {
        currentPromise = waitAtleast(checkRoomId(roomId), MINIMUM_WAIT_TIME_SECS);
        await currentPromise;
        enteredRoom = true;
    };

    const handleNickname = async () => {
        currentPromise = waitAtleast(checkNickname(roomId, nickname), MINIMUM_WAIT_TIME_SECS);
        await currentPromise;
    };
</script>

<style>
    @keyframes background-colors {
        0% { background: #ba9433 }
        20% { background: #48cbb7 }
        40% { background: #53c632 }
        60% { background: #3f69d4 }
        80% { background: #ae2ea8 }
        100% { background: #ba9433 }
    }

    .homepage {
        animation: 18s ease 0s infinite alternate none running background-colors;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 255px;
        padding-bottom: 1.5rem;
    }

    .pin {
        margin-bottom: 10px;
        width: 100%;
    }

    .enter {
        width: 100%;
    }

    .form {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        width: 255px;
        min-height: 100px;
    }
</style>

<div class="homepage">
    <img class="logo" src="logo.svg" alt="logo" />
    <div class="form">
        {#if !enteredRoom}
            <input class="pin" placeholder="Game PIN" bind:value={roomId}/>
            <button class="enter" on:click={() => handleEnter()}>Enter</button>
        {:else}
            <input class="pin" placeholder="Nickname" bind:value={nickname}/>
            <button class="enter" on:click={() => handleNickname()}>OK, go!</button>
        {/if}

        {#await currentPromise}
            <SpinnerOverlay text={enterLoading}/>
        {:catch error}
            <ErrorFooter errorMsg="asdasd" />
        {/await}
    </div>
</div>
