import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { AspenLinkMixin } from './aspen-link-mixin';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';


/**
 * `aspen-link` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenLink extends AspenLinkMixin(PolymerElement) {

	static get template() {
		return html`
			<style>
			:host {
				display: block;
					}
			</style>
			<a href$="[[url]]" target="_blank">[[label]]</a>
			`;
	}

	/**
	 * String providing the tag name to register the element under.
	 */
	static get is() {
		return 'aspen-link';
	}

	/**
	 * Instance of the element is created/upgraded. Use: initializing state,
	 * set up event listeners, create shadow dom.
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Use for one-time configuration of your component after local DOM is initialized. 
	 */

	ready() {
		super.ready();

		afterNextRender(this, function () {

		});
	}

}

window.customElements.define(AspenLink.is, AspenLink);