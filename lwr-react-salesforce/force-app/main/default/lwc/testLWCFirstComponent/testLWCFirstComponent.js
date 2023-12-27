import { api, track, LightningElement } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";
import LWR_CONTAINER_URL from "@salesforce/resourceUrl/LWRContainer";
import getContactList from "@salesforce/apex/ContactController.getContactList";

export default class TestLWCFirstComponent extends LightningElement {
  @api buttonText;
  @track contacts;
  static renderMode = "light"; // the default is 'shadow'

  /**
   * Loading Javascript from ThirdParty
   */
  connectedCallback() {
    console.log("[connectedCallback] Loading All Javascript Outside");
    Promise.all([
      //loadStyle(this, leaflet + '/leaflet.css'),
      loadScript(this, LWR_CONTAINER_URL + "/custom-javascript/lwr-engine.js"),
      loadScript(this, LWR_CONTAINER_URL + "/custom-javascript/jquery-3.7.1.js")
    ]).then(() => {
      // initialize the library using a reference to the container element obtained from the DOM
      const idLibrary1 = this.querySelector("div#idLibrary1");
      console.log("[Then]Javascript loaded. Outside!");
      methodNormalJavascriptAccessDOM(idLibrary1);

      console.log("[Then]Loading jQuery! Outside", jQuery().jquery);
      const idLibrary2 = this.querySelector("div#idLibrary2");
      methodWithJQuery(idLibrary2);

      console.log("Calling callingFromThirdPartyGetContacts");
      callingFromThirdPartyGetContacts(getContactList);
    });
  }

  async handleLoad() {
    try {
      this.contacts = await getContactList();
    } catch (error) {
      this.contacts = undefined;
    }
  }
}
