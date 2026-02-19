/**
 * ProbablyEnough.dev main object
 */
probablyEnough = {

    addPrompts() {
        const promptStart = '<div class="prompt">ian@probablyenough:~$<span class="cmd"';
        const promptEnd = '</span></div>';
        
        // foreach .line, add prompt based on data-cmd-
            var promptCmd = '';
            // CMDs:
            // '> echo {{echo}}'
            // ' id="cursor"> █'

            var prompt = promptStart + promptCmd + promptEnd;
    },

    blinkCursor() {
        // for .cursor, blink the text
    },

    initBtns() {
        // foreach .btn
            // get first link url, block link action
            // add onclick = url, onhover = show in status
    },

    init() {
        this.addPrompts();
        this.blinkCursor();
        this.initBtns();
    },

}

probablyEnough.init();
