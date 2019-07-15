/**
 * This mixin allows the user to  navigate to an external web page when
 *  and ID is given as input. For example, the  ID given is a stock ticker symbol,
 *  the  component will send the user to Yahoo  Finance.
 * @polymerMixin
 * @mixinFunction
 */
export const AspLinkMixin = superclass =>
  class extends superclass {
    constructor() {
      super();
    }

    connectedCallback() {
      super.connectedCallback();
      //let linkable = this.shadowRoot.querySelector(".linkable");
      this.addEventListener('on-drop', e => this.handleDrop(e));
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      //let linkable = this.shadowRoot.querySelector(".linkable");
      this.removeEventListener('on-drop', e => this.handleDrop(e));
    }

    /**
     * This method handles the drop event when a user drops a link onto the widget.
     */
    handleDrop(e) {
      let url = e.dataTransfer.getData('URL');
      fetch('/documentType/handleLink?url=' + url)
        .then(function(response) {
          if (response.status !== 200) {
            console.log(
              'Looks like there was a problem. Status Code: ' + response.status
            );
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    }
  };
