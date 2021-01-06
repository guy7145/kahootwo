<script>
    import {game, gameId, nickname} from "../../stores/game";
    import {glitchy} from "../../stores/vfx";
    import {players} from "../../stores/host";
    import Host from "../../lib/api/host";
    import Glitchy from "../../vfx/Glitchy.svelte";

    $: if (!$game) {
        game.set(new Host($gameId, $nickname));
    }
</script>

<style>
    .square-animation {
        position: fixed;
        top: -10vw;
        left: -10vw;
        min-width: 50vw;
        min-height: 50vw;
        background-color: rgb(0, 0, 0);
        transform: rotate(45deg);
        opacity: 0.1;
        animation: 8s ease-in-out 0s infinite alternate none running juibOf;
    }
    .circle-animation {
        position: fixed;
        bottom: -55vw;
        right: -35vw;
        min-width: 85vw;
        min-height: 85vw;
        border-radius: 50vw;
        background-color: rgb(0, 0, 0);
        opacity: 0.1;
        animation: 6s ease-in-out 0s infinite alternate none running swZap;
    }

    .header {
        position: relative;
        min-height: calc((7.625rem + 5vmin) - 7.5vmin);
        padding: 5.5vmin calc(2.5rem + 5vmin) 2.5vmin;
        transition: all 0.2s ease 0s;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        flex: 0 0 auto;
        background-color: rgb(37, 7, 107);
        border-bottom: 0.2vmin solid rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .body {
        position: relative;
        overflow: hidden;
        max-height: 100vh;
        background-color: rgb(70, 23, 143);
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .button {
        background-color: rgb(255, 255, 255);
        border-radius: 50%;
        box-sizing: border-box;
        width: 32px;
        height: 32px;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        -webkit-box-align: center;
        box-shadow: none;
        cursor: pointer;
        display: flex;
        -webkit-box-pack: justify;
        min-height: unset;
        position: relative;
        transition: all 100ms ease 0s;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        outline: 0 !important;
    }

    .main {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .button-container {
        position: absolute;
        top: 2.5vmin;
        right: 2.5vmin;
        display: flex;
        flex-direction: column;
    }

    @keyframes juibOf {
        0% {
            transform: translate3d(-5vw, 2vh, 0) rotate(45deg);
        }
        50% {
            transform: translate3d(0, 0, 0) rotate(45deg);
        }
        100% {
            transform: translate3d(-5vw, -2vh, 0) rotate(45deg);
        }
    }

    @keyframes swZap {
        0% {
            transform: translate3d(0, 0, 0);
        }
        50% {
            transform: translate3d(-5vw, -2vh, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    .join-text {
        background-color: rgb(255, 255, 255);
        padding: 1.7vmin 2.5vmin 1.7vmin 2.8vmin;
        border-radius: 0.5vmin 0 0 0.5vmin;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-right: -1vmin;
        clip-path: polygon(
                calc(100% - 2.5vmin) 0,
                100% 50%,
                calc(100% - 2.5vmin) 100%,
                0 100%,
                0 0
        );
        flex-direction: column;
        line-height: 3.74vmin;
        text-align: left;
    }

    .gamepin-text {
        display: inline;
        background-color: rgb(255, 255, 255);
        font-size: 2.34vmin;
        line-height: 2.49vmin;
        font-weight: bold;
        position: absolute;
        top: 0.2vmin;
        left: 3.3vmin;
        transform: translateY(-100%);
        padding: 0.5vmin 1vmin 0;
        border-radius: 0.5vmin 0.5vmin 0 0;
        text-align: left;
    }

    .gamepin {
        font-size: 9.38vmin;
        font-weight: 900;
        line-height: normal;
        letter-spacing: 0.286vmin;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 0 0.5vmin 0.5vmin 0;
        padding: 0 2.8vmin 0 5.3vmin;
        margin-left: -1vmin;
        clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 100%, 2.5vmin 50%);
    }

    .logo {
        width: 22.9vmin;
    }

    .lobby-list-headers {
        display: flex;
        flex: 0 0 auto;
        -webkit-box-pack: justify;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2.5vmin;
        z-index: 1;
    }

    .player-counter {
        display: inline-flex;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 0.42vmin;
        padding: 0.5vmin 2vmin 0.5vmin 0.5vmin;
    }

    .player-counter-text {
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 3.5vmin;
        line-height: 4vmin;
    }

    .start-wrapper {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
    }

    button {
        box-shadow: rgba(0, 0, 0, 0.15) 0 -0.25rem 0 0 inset;
        border: none;
        width: auto;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        min-width: 0;
        border-radius: 0.42vmin;
        line-height: normal;
        min-height: 2.5rem;
        height: 4vmin;
    }

    .user-list {
        height: auto;
        padding: 0 2.5vmin;
        text-align: left;
        display: flex;
        flex: 0 0 auto;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        justify-content: center;
        z-index: 1;
        margin: 0 auto;
        width: 80%;
    }
    .user-item {
        color: rgb(255, 255, 255);
        fill: rgb(255, 255, 255);
        margin: 2vmin 1vmin;
        padding: 1vmin 3vmin;
        font-weight: 600;
        text-align: center;
        box-sizing: border-box;
        flex: 0 1 auto;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 0.4vmin;
        animation: 1s ease 0s 1 normal none running essOoI;
        font-size: 3.5vmin;
        position: relative;
        display: block;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: normal;
        cursor: pointer;
    }

    .user-item:hover {
        text-decoration: line-through;
    }
</style>

<div class={$glitchy ? 'main black' : 'main'}>
    <div class="header">
            <div
                    class="button"
                    style="width: 65px; border-radius: 16px; position: absolute; top: 2.5vmin; left: 2.5vmin;">
                <img
                        alt="nada muchacho"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibGFuZ3VhZ2UtYmxhY2stYSIgZD0iTTE1Ljk5OTUsNiBDMTAuNDc3NSw2IDUuOTk5NSwxMC40NzcgNS45OTk1LDE2IEM1Ljk5OTUsMjEuNTIzIDEwLjQ3NzUsMjYgMTUuOTk5NSwyNiBDMjEuNTIyNSwyNiAyNS45OTk1LDIxLjUyMyAyNS45OTk1LDE2IEMyNS45OTk1LDEwLjQ3NyAyMS41MjI1LDYgMTUuOTk5NSw2IE0xOS4xMDI1LDIzLjM3MyBDMTkuNTIxNSwyMi4yNTMgMTkuODYxNSwyMS4xMjggMjAuMDkwNSwyMCBMMjIuOTE3NSwyMCBDMjIuMDQ3NSwyMS40OTggMjAuNzExNSwyMi42OTQgMTkuMTAyNSwyMy4zNzMgTTE1LjI2MjUsMjMuOTYyIEwxNC45Mjg1LDIzLjEyOCBDMTQuNTEyNSwyMi4wODkgMTQuMjAzNSwyMS4wNDQgMTMuOTY4NSwyMCBMMTguMDMxNSwyMCBDMTcuNzk2NSwyMS4wNDQgMTcuNDg3NSwyMi4wODkgMTcuMDcxNSwyMy4xMjggTDE2LjczNzUsMjMuOTYyIEMxNi40OTQ1LDIzLjk4NSAxNi4yNDg1LDI0IDE1Ljk5OTUsMjQgQzE1Ljc1MDUsMjQgMTUuNTA1NSwyMy45ODUgMTUuMjYyNSwyMy45NjIgTTkuMDgyNSwyMCBMMTEuOTA5NSwyMCBDMTIuMTM4NSwyMS4xMjggMTIuNDc4NSwyMi4yNTMgMTIuODk3NSwyMy4zNzMgQzExLjI4ODUsMjIuNjk0IDkuOTUyNSwyMS40OTggOS4wODI1LDIwIE0xMS42MDM1LDE4IEw4LjI2MzUsMTggQzguMDk3NSwxNy4zNTkgNy45OTk1LDE2LjY5MSA3Ljk5OTUsMTYgQzcuOTk5NSwxNS4zMDkgOC4wOTc1LDE0LjY0MSA4LjI2MzUsMTQgTDExLjYwMzUsMTQgQzExLjUzNTUsMTQuNjY4IDExLjQ5OTUsMTUuMzM1IDExLjQ5OTUsMTYgQzExLjQ5OTUsMTYuNjY1IDExLjUzNTUsMTcuMzMyIDExLjYwMzUsMTggTTEyLjg5NzUsOC42MjcgQzEyLjQ3ODUsOS43NDcgMTIuMTM4NSwxMC44NzIgMTEuOTA5NSwxMiBMOS4wODI1LDEyIEM5Ljk1MjUsMTAuNTAyIDExLjI4ODUsOS4zMDYgMTIuODk3NSw4LjYyNyBNMTYuNzM3NSw4LjAzOCBMMTcuMDcxNSw4Ljg3MiBDMTcuNDg3NSw5LjkxMSAxNy43OTY1LDEwLjk1NiAxOC4wMzE1LDEyIEwxMy45Njg1LDEyIEMxNC4yMDM1LDEwLjk1NiAxNC41MTI1LDkuOTExIDE0LjkyODUsOC44NzIgTDE1LjI2MjUsOC4wMzggQzE1LjUwNTUsOC4wMTUgMTUuNzUwNSw4IDE1Ljk5OTUsOCBDMTYuMjQ4NSw4IDE2LjQ5NDUsOC4wMTUgMTYuNzM3NSw4LjAzOCBNMTguMzc2NSwxOCBMMTMuNjIzNSwxOCBDMTMuNTQ3NSwxNy4zMzEgMTMuNDk5NSwxNi42NjQgMTMuNDk5NSwxNiBDMTMuNDk5NSwxNS4zMzYgMTMuNTQ3NSwxNC42NjggMTMuNjIzNSwxNCBMMTguMzc2NSwxNCBDMTguNDUyNSwxNC42NjggMTguNDk5NSwxNS4zMzYgMTguNDk5NSwxNiBDMTguNDk5NSwxNi42NjQgMTguNDUyNSwxNy4zMzEgMTguMzc2NSwxOCBNMjIuOTE3NSwxMiBMMjAuMDkwNSwxMiBDMTkuODYxNSwxMC44NzIgMTkuNTIxNSw5Ljc0NyAxOS4xMDI1LDguNjI3IEMyMC43MTE1LDkuMzA2IDIyLjA0NzUsMTAuNTAyIDIyLjkxNzUsMTIgTTIzLjk5OTUsMTYgQzIzLjk5OTUsMTYuNjkxIDIzLjkwMjUsMTcuMzU5IDIzLjczNjUsMTggTDIwLjM5NTUsMTggQzIwLjQ2NDUsMTcuMzMyIDIwLjQ5OTUsMTYuNjY1IDIwLjQ5OTUsMTYgQzIwLjQ5OTUsMTUuMzM1IDIwLjQ2NDUsMTQuNjY4IDIwLjM5NTUsMTQgTDIzLjczNjUsMTQgQzIzLjkwMjUsMTQuNjQxIDIzLjk5OTUsMTUuMzA5IDIzLjk5OTUsMTYiLz4KICA8L2RlZnM+CiAgPHVzZSBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNsYW5ndWFnZS1ibGFjay1hIi8+Cjwvc3ZnPgo=" />
                <div style="width: 32px;">EN</div>
            </div>
        <div
                class="button"
                style="position: absolute; bottom: 2.5vmin; left: 2.5vmin;">
            <svg
                    style="height: 32px;"
                    id="arrow"
                    data-functional-selector="icon"
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="none"
                    stroke-width="0"><path
                    d="M7.085 19.5L15.501 11.086 23.915 19.5 22.5 20.915 15.501 13.915 8.501 20.915z"
                    style="fill: rgb(51, 51, 51);" /></svg>
        </div>
        <div class="button-container">
            <Glitchy>
                <div class="button" style="margin-bottom: 13px;">
                    <svg
                            id="expand"
                            style="height: 24px;"
                            data-functional-selector="icon"
                            viewBox="0 0 32 32"
                            focusable="false"
                            stroke="none"
                            stroke-width="0"
                    >
                        <path
                                d="M9,17H5V27H15V23H9ZM17,5V9h6v6h4V5Z"
                                style="fill: rgb(0, 0, 0);" />
                    </svg>
                </div>
            </Glitchy>
            <Glitchy>
                <div class="button" style="margin-bottom: 13px;">
                    <svg
                            id="change-music"
                            style="height: 24px;"
                            data-functional-selector="icon"
                            viewBox="0 0 32 32"
                            focusable="false"
                            stroke="none"
                            stroke-width="0"><path
                            d="M23.561,7.17249556 C23.287,6.98549556 22.937,6.94849556 22.629,7.07149556 L12.629,11.0714956 C12.249,11.2244956 12,11.5924956 12,12.0004956 L12,18.3524956 C11.543,18.1324956 11.04,18.0004956 10.5,18.0004956 C8.57,18.0004956 7,19.5704956 7,21.5004956 C7,23.4304956 8.57,25.0004956 10.5,25.0004956 C12.431,25.0004956 14,23.4304956 14,21.5004956 L14,12.6784956 L22,9.47849556 L22,15.3524956 C21.543,15.1334956 21.04,15.0004956 20.5,15.0004956 C18.571,15.0004956 17,16.5704956 17,18.5004956 C17,20.4304956 18.571,22.0004956 20.5,22.0004956 C22.43,22.0004956 24,20.4304956 24,18.5004956 L24,8.00049556 C24,7.66849556 23.835,7.35849556 23.561,7.17249556 M10.5,23.0004956 C9.673,23.0004956 9,22.3274956 9,21.5004956 C9,20.6724956 9.673,20.0004956 10.5,20.0004956 C11.328,20.0004956 12,20.6724956 12,21.5004956 C12,22.3274956 11.328,23.0004956 10.5,23.0004956 M20.5,20.0004956 C19.673,20.0004956 19,19.3274956 19,18.5004956 C19,17.6724956 19.673,17.0004956 20.5,17.0004956 C21.328,17.0004956 22,17.6724956 22,18.5004956 C22,19.3274956 21.328,20.0004956 20.5,20.0004956"
                            style="fill: rgb(0, 0, 0);" /></svg>
                </div>
            </Glitchy>
            <Glitchy>
                <div class="button" style="margin-bottom: 13px;">
                    <svg
                            id="mute"
                            style="height: 24px;"
                            data-functional-selector="icon"
                            viewBox="0 0 32 32"
                            focusable="false"
                            stroke="none"
                            stroke-width="0"><path
                            d="M15.3827 7.0786C15.0087 6.9246 14.5787 7.0096 14.2927 7.2956L9.9997 12.0026 6.9997 12.0026C6.4497 12.0026 5.9997 12.4536 5.9997 13.0026L5.9997 19.0026C5.9997 19.5526 6.4497 20.0026 6.9997 20.0026L9.9997 20.0026 14.2927 24.7096C14.5787 24.9956 15.0087 25.0806 15.3827 24.9266 15.7567 24.7726 15.9997 24.4076 15.9997 24.0026L15.9997 8.0026C15.9997 7.5986 15.7567 7.2326 15.3827 7.0786M17.9999 13.0024L17.9999 15.0024C18.5509 15.0024 18.9999 15.4514 18.9999 16.0024 18.9999 16.5534 18.5509 17.0024 17.9999 17.0024L17.9999 19.0024C19.6539 19.0024 20.9999 17.6574 20.9999 16.0024 20.9999 14.3484 19.6539 13.0024 17.9999 13.0024z"
                            style="fill: rgb(51, 51, 51);" /></svg>
                </div>
            </Glitchy>
        </div>
        <div style="font-size: 3.28vmin; display: flex;">
            <div class="join-text">
                <div>Join at <strong>www.kahoot.it</strong></div>
                <div>or with the <strong>Kahoot! app</strong></div>
            </div>
            <div
                    style="position: relative; min-height: 100%; display: flex; flex: 1 0 auto;">
                <div class="gamepin-text">Game PIN:</div>
                <div class="gamepin">
                    <span
                            style="padding-right: 0.15em;">280</span><span>6306</span>
                </div>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="square-animation"></div>
        <div class="circle-animation"></div>

        <div class="lobby-list-headers">
            <div>
                <Glitchy>
                    <div class="player-counter">
                        <svg
                                style="width: 4vmin; height: 4vmin;"
                                id="icon1"
                                data-functional-selector="icon"
                                viewBox="0 0 32 32"
                                focusable="false"
                                stroke="none"
                                stroke-width="0">
                            <path
                                    d="M16,16 C13.2385763,16 11,13.7614237 11,11 C11,8.23857625 13.2385763,6 16,6 C18.7614237,6 21,8.23857625 21,11 C21,13.7614237 18.7614237,16 16,16 Z M25,24.3125 L7,24.3125 C7,20.2739178 11.0294373,17 16,17 C20.9705627,17 25,20.2739178 25,24.3125 Z"
                                    style="fill: rgb(255, 255, 255);" />
                        </svg>
                        <div class="player-counter-text">{$players.length}</div>
                    </div>
                </Glitchy>
            </div>
            <img
                    alt="asda"
                    class="logo"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NDAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NDAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjI2LjgsNTIuNWMtMTguNywwLjMtMzQuOCwxNi4xLTM2LDM1LjFjLTEuMSwxOS4xLDE0LjEsMzYuMSwzMy45LDM4LjFjMTkuOSwyLDM2LTEzLjgsMzYtMzUuMQoJCUMyNjAuNyw2OS4yLDI0NS41LDUyLjIsMjI2LjgsNTIuNXogTTI0MC4yLDkyYy0wLjgsOS45LTcsMTUuMy0xMS4xLDE1LjdjLTEwLjMsMS4yLTE5LjEtOC4xLTE4LjUtMjBzNS40LTE5LjMsMTUuMS0xOS41CgkJQzIzNS40LDY4LDI0MS4zLDc5LjEsMjQwLjIsOTJ6Ii8+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzAwLjMsNTQuNGMtMTguNy0wLjMtMzMuOSwxNi43LTMzLjksMzguMXMxNi4xLDM3LjEsMzYsMzUuMWMxOS45LTIsMzUuMS0xOSwzMy45LTM4LjEKCQlDMzM1LjIsNzAuNSwzMTkuMSw1NC44LDMwMC4zLDU0LjR6IE0yOTgsMTA5LjdjLTQuMS0wLjUtMTAuMi01LjktMTEuMS0xNS43Yy0xLjEtMTIuOSw0LjgtMjQsMTQuNS0yMy44czE0LjUsNy42LDE1LjEsMTkuNQoJCUMzMTcuMSwxMDEuNSwzMDguMywxMTAuOSwyOTgsMTA5Ljd6Ii8+Cgk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjgyLjUsMzYuNiA2Mi40LDI4LjkgMjMuMiw2Ni4zIDIzLjIsMTkuNiAwLDI1LjUgMCwxMzUuMiAyMy4yLDEzNiAyMyw5Ny42IDM3LjMsODMuOCA1Mi40LDEzNiAKCQk3Mi45LDEzNiA1NCw2Ny45IAkiLz4KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNDYuMiw0OS4yTDE0NS44LDBMMTI2LDUuMmwzLjIsMTIxLjZsMTkuNSwwLjdsLTEuMS02Mi44YzQuMy0xLjksMTguNC01LjgsMTguOSw5LjdsMS45LDIyLjFsMS4zLDMxLjEKCQloMjAuNGwtNy43LTUzLjdDMTc5LjMsNDIuNSwxNjcuOCw0Mi40LDE0Ni4yLDQ5LjJ6Ii8+Cgk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjQxNS4yLDEyOC4yIDQwOS41LDE0MS42IDQyMS43LDE1MCA0MzMuNywxNDIuOSA0MjguNiwxMjguMiAJIi8+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzYzLjQsMTkuNmwtMTUuNS02LjR2MzIuMWwtMTcuMy0wLjZsMy4zLDIyLjhoMTRsMSw1NC4zYzAsMC0yLjIsMTkuNSwyNy42LDE1LjFjMCwwLDkuMy0yLjgsOS05LjN2LTIxLjQKCQljMCwwLTYuMywzLjctMTMuMSwzLjdjLTYuOCwwLTYuOS0zLjMtNi45LTMuM2wtMS44LTQybDIxLjctMS4yVjQ5LjVMMzYzLjEsNDhMMzYzLjQsMTkuNnoiLz4KCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNDQwLDE5LjggMzk5LDEyIDQyNC4yLDEyMC41IAkiLz4KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03Ny42LDQ5LjlMODMsNjQuMWMxMy41LTguMSwyMS4xLDAsMjEuMSwwbC0wLjEsOS4xYy00MC4yLDcuMS0zMCw0NC4zLTMwLDQ0LjMKCQljNC4xLDE0LjYsMTcuMywxNC4xLDE3LjMsMTQuMWgzMC4xbDAuNi02Ny43QzExNy4zLDMyLjQsNzcuNiw0OS45LDc3LjYsNDkuOXogTTEwNCwxMTguNmMwLDAtMTQuNiwzLjUtMTYuMi0xMC43CgkJYzAsMCwwLjMtMjIsMTYuNy0xOS42TDEwNCwxMTguNnoiLz4KPC9nPgo8L3N2Zz4K" />
            <div class="start-wrapper">
                <div><Glitchy>
                    <button style="margin-right: 1.2vmin;">
                        <span
                                style="display: inline-block; vertical-align: middle; width: 4vmin; height: 4vmin;">
                            <svg
                                    style="width: 4vmin; height: calc(2.25rem) !important;"
                                    viewBox="0 0 32 32"
                                    focusable="false"
                                    stroke="none"
                                    stroke-width="0">
                                <path
                                        d="M16,21.8604651 C15.1912558,21.8604651 14.5348837,21.204093 14.5348837,20.3953488 C14.5348837,19.5866047 15.1912558,18.9302326 16,18.9302326 C16.8087442,18.9302326 17.4651163,19.5866047 17.4651163,20.3953488 C17.4651163,21.204093 16.8087442,21.8604651 16,21.8604651 M20.8837209,15.0232558 L13.0697674,15.0232558 L13.0697674,11.1162791 C13.0697674,9.50074419 14.3844651,8.18604651 16,8.18604651 C17.6155349,8.18604651 18.9302326,9.50074419 18.9302326,11.1162791 L18.9302326,12.0930233 L20.8837209,12.0930233 L20.8837209,11.1162791 C20.8837209,8.42339535 18.6928837,6.23255814 16,6.23255814 C13.3071163,6.23255814 11.1162791,8.42339535 11.1162791,11.1162791 L11.1162791,15.0232558 C10.0389302,15.0232558 9.1627907,15.8984186 9.1627907,16.9767442 L9.1627907,23.8139535 C9.1627907,24.8913023 10.0389302,25.7674419 11.1162791,25.7674419 L20.8837209,25.7674419 C21.9610698,25.7674419 22.8372093,24.8913023 22.8372093,23.8139535 L22.8372093,16.9767442 C22.8372093,15.8984186 21.9610698,15.0232558 20.8837209,15.0232558"
                                        style="fill: rgb(51, 51, 51);" />
                            </svg>
                        </span>
                    </button>
                </Glitchy></div>
                <Glitchy><div aria-expanded="false">
                    <button
                            type="register"
                            style="font-size: 1.0437rem; padding: 0 1rem 0.25rem;">
                        Start
                    </button>
                </div></Glitchy>
            </div>
        </div>

        <div class="user-list">
            {#each $players as player (player)}
                <div class="user-item">{player}</div>
            {/each}
        </div>
    </div>
</div>
