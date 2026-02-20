/**
 * ProbablyEnough.dev main object
 */
probablyEnough = {

    updatePrompts() {
        // replace h2 text with the text in data-cmd
        document.querySelectorAll( 'main h2.prompt' ).forEach( item => {
            item.innerHTML = 'ian@probablyenough:~$<span class="cmd"> ' + item.dataset.cmd + '</span>';
        });
    },

    linkCards() {
        document.querySelectorAll( '.card' ).forEach( item => {
            // get the first link in the card
            const cardLink = item.querySelectorAll( 'a' )[0];
            
            // if there is a link, turn the whole card into a button
            if( cardLink ) {
                const cardUrl = cardLink.href;
                
                cardLink.onclick = function( e ) { e.preventDefault(); };
                
                item.onclick = function( e ) { window.location.href = cardUrl; };
                item.classList.add( 'link' );
            }
        });
    },

    init() {
        this.updatePrompts();
        this.linkCards();
    },

}

probablyEnough.init();
