<script>
    import {navigate} from 'svelte-routing';
    import GamePin from "./GamePin.svelte";
    import Nickname from "./Nickname.svelte";
    import {gameId, nickname} from "../../stores/game-store";

    import './basic-layout.css';
    import logo from '../../assets/logo.svg';


    let gameIdOK = false;
    function startGame() {
        navigate(`/game`);
    }
</script>

<div class="homepage">
    <div class="logo">
        {@html logo}
    </div>
    <div class="form">
        {#if !gameIdOK}
            <GamePin bind:gameId={$gameId} onSuccess={() => gameIdOK = true}/>
        {:else}
            <Nickname bind:nickname={$nickname} gameId={$gameId} onSuccess={startGame}/>
        {/if}
    </div>
</div>
