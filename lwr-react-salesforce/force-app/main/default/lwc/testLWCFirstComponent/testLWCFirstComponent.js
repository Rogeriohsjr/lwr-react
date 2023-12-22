import { api, LightningElement } from "lwc";
import LWR_CONTAINER_URL from "@salesforce/resourceUrl/LWRContainer";


export default class TestLWCFirstComponent extends LightningElement {
  @api buttonText;

  mainLWRStaticURL = LWR_CONTAINER_URL + '/custom-javascript/lwr-engine.js';

  buttonClickEvent() {
    alert("Hello");
  }
}
