<script>
    export let errorMsg;
    export let visibilityTimeSeconds = 3;
    let hidden = false;
    if(!hidden) {
        setTimeout(() => hidden = true, visibilityTimeSeconds * 1000);
    }
</script>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        box-sizing: border-box;

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
        padding: 0.0625em 0.5em;
        color: rgb(255, 255, 255);
        z-index: 105;
        animation: 0.2s ease-in-out 0s 1 normal none running pop-up;
        transform: translateY(0px);
        transition: transform 0.5s ease-in-out 0s;
        background: rgb(226, 27, 60);
    }

    .footer.hidden {
        transform: translateY(3.125rem);
    }

    .inner-container {
        display: inline-flex;
        flex: 1 1 auto;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
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

<div class={hidden ? "footer hidden" : "footer"}>
    <div class="inner-container">
        <span class="icon-container">
            <svg data-functional-selector="icon" viewBox="0 0 32 32" focusable="false" stroke="none" stroke-width="0">
                <path d="M16,6 C21.514,6 26,10.485 26,16 C26,21.513 21.514,26 16,26 C10.486,26 6,21.514 6,16 C6,10.485 10.486,6 16,6 Z M16,24 C20.411,24 24,20.411 24,16 C24,11.589 20.411,8 16,8 C11.589,8 8,11.589 8,16 C8,20.411 11.589,24 16,24 Z M16,18.75 C16.6903559,18.75 17.25,19.3096441 17.25,20 C17.25,20.6903559 16.6903559,21.25 16,21.25 C15.3096441,21.25 14.75,20.6903559 14.75,20 C14.75,19.3096441 15.3096441,18.75 16,18.75 Z M17,17 L15,17 L15,11 L17,11 L17,17 Z" style="fill: rgb(255, 255, 255);">
                </path>
            </svg>
        </span>
        <div class="error-msg">{errorMsg}</div>
    </div>
</div>
