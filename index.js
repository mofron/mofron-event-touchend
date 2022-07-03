/**
 * @file mofron-event-touchend/index.js
 * @brief touchend event for mofron
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("TouchEnd");
	    //this.shortForm("");
            
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    /**
     * event contents
     * 
     * @param (mofron.class.dom) target dom object
     * @type private
     */
    contents (dom) {
        try {
	    let evt_obj = this;
            /* event contents */
            dom.getRawDom().addEventListener(
                'touchend',
                (event) => {
                    event.preventDefault();
		    evt_obj.execListener(event);
                },
                { passive: false }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
