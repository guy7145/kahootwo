<script>
    import {navigate} from 'svelte-routing';
    import GamePin from "./GamePin.svelte";
    import Nickname from "./Nickname.svelte";
    import {gameId, nickname} from "../../stores/game";

    import './basic-layout.css';
    import logo from '../../assets/logo.svg';
    import Glitchy from "../../vfx/Glitchy.svelte";


    let gameIdOK = false;
</script>

<div class="homepage">
    <div class="logo">
        <Glitchy>
            {@html logo}
        </Glitchy>
    </div>
    <div class="form">
        {#if !gameIdOK}
            <GamePin bind:gameId={$gameId} onSuccess={() => gameIdOK = true}/>
        {:else}
            <Nickname bind:nickname={$nickname} gameId={$gameId} onSuccess={() => navigate('/lobby')}/>
        {/if}
    </div>
</div>
