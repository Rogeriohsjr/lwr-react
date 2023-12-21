import { api, LightningElement } from "lwc";

export default class TestLWCFirstComponent extends LightningElement {
  @api buttonText;

  buttonClickEvent() {
    alert("Hello");
  }
}
