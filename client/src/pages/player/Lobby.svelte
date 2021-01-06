<script>
    import {onMount} from 'svelte';
    import {nickname, game, gameId} from "../../stores/game";
    import Player from "../../lib/api/player";
    import Glitchy from "../../vfx/Glitchy.svelte";
    import {glitchy} from "../../stores/vfx";

    const title = "You're in!";
    const subtitle = "See your nickname on screen?";

    onMount(() => {
        game.set(new Player($gameId, $nickname))
    });
</script>

<style>
    .main {
        color: #fff;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex: 1 0 auto;
        background: rgb(102, 191, 57);
    }

    .main.black {
        background: #13240a;
    }

    .footer {
        position: fixed;
        width: 100%;
        z-index: 1;

        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: rgb(0, 0, 0);
        font-size: 1.125rem;
        min-height: 4.5em;
        padding-left: 0.375rem;
        padding-right: 0.375rem;
        bottom: 0;
        border-top: 0.1875rem solid rgba(0, 0, 0, 0.15);
    }

    .nickname {
        margin: 0 0.625rem;
    }

    .text {
        z-index: 1;
    }

    .shadow {
        position: absolute;
        top: 0;
        -webkit-text-stroke: 2.1pt black;
        text-shadow: rgb(0, 0, 0) -1pt 2.25pt 0, rgb(0, 0, 0) 1pt 2.25pt 0;
        opacity: 0.35;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin: 0 0 0.625rem;
    }

    .title, .subtitle {
        position: relative;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }

    .title {
        margin: 0;
        font-size: 40px;
        line-height: normal;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }

    .subtitle {
        margin: 1.5rem 0 0;
        font-weight: 700;
        font-size: 20px;
        color: rgb(255, 255, 255);
    }
</style>

<div class="{$glitchy ? 'main black' : 'main'}">
    <div class="title">
        <p class="text"><Glitchy>{title}</Glitchy></p>
        <p class="shadow"><Glitchy>{title}</Glitchy></p>
    </div>
    <div class="subtitle">
        <p class="text"><Glitchy>{subtitle}</Glitchy></p>
        <p class="shadow"><Glitchy>{subtitle}</Glitchy></p>
    </div>
    <div class="footer">
        <div class="nickname"><Glitchy>{$nickname}</Glitchy></div>
    </div>
</div>
