<style>
    @keyframes spin {
        0% {transform: rotateZ(0)}
        70% {transform: rotateZ(360deg)}
        100% {transform: rotateZ(360deg)}
    }

    .spinner {
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        animation: 0.6s ease-out 0s infinite normal none running spin;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgIHZpZXdCb3g9IjAgMCAxNDAgMTQwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAgMTQwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CiAgICA8Y2lyY2xlIG9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIGN4PSI3MCIgY3k9IjcwIiByPSI3MCIvPgogICAgPGc+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTcwLDBDMzEuMywwLDAsMzEuMywwLDcwaDM1YzAtMTkuMywxNS43LTM1LDM1LTM1czM1LDE1LjcsMzUsMzVoMzVDMTQwLDMxLjMsMTA4LjcsMCw3MCwweiIvPgogICAgPC9nPgo8L2c+Cjwvc3ZnPgo=);
        width: 4.375rem;
        height: 4.375rem;
        margin: 1.25rem auto 1.5rem;
    }
</style>

<div class="spinner"></div>
