<script>
    export let errorMsg;
</script>

<style>
    @keyframes pop-up {
        from {transform: translateY(100%)}
    }

    .footer {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;

        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        min-height: 3.125rem;
        opacity: 1;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0.0625rem 0.5rem;
        color: rgb(255, 255, 255);
        z-index: 105;
        animation: 0.2s ease-in-out 0s 1 normal none running pop-up;
        transform: translateY(0px);
        transition: transform 0.5s ease-in-out 0s;
        background: rgb(226, 27, 60);
    }

    .error-msg {
        display: inline-block;
        font-size: 1rem;
        line-height: normal;
        flex: 0 1 auto;
        margin-right: 0.5rem;
        word-break: break-word;
    }

    .icon-container {
        display: inline-block;
        vertical-align: middle;
        width: 48px;
        height: 48px;
    }
</style>

<div class="footer">
    <span class="icon-container">
        <img class="logo" src="error-icon.svg" alt="logo" />
    </span>
    <div class="error-msg">{errorMsg}</div>
</div>
