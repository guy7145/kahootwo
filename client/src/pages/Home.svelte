<script>
    import SpinnerOverlay from "../components/SpinnerOverlay.svelte";
    import {checkNickname, checkRoomId} from "../api/room";
    import ErrorFooter from "../components/ErrorFooter.svelte";

    export let roomId = null;
    let nickname = '';

    let enteredRoom = false;
    let currentPromise = false;

    const handleEnter = async () => {
        currentPromise = checkRoomId(roomId);
        await currentPromise;
    };

    const handleNickname = async () => {
        currentPromise = checkNickname(roomId, nickname);
        await currentPromise;
    };
</script>

<style>
    @keyframes background-colors {
        0% { background: #ba9433 }
        20% { background: #cb4848 }
        40% { background: #3f69d4 }
        60% { background: #53c632 }
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
            <SpinnerOverlay/>
        {:catch error}
            <ErrorFooter errorMsg="">
        {/await}
    </div>
</div>
