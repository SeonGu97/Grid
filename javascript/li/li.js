"use strict";

export default class LI {
  constructor(generate, type, value, parent, number, text) {
    this.li = new generate("li", "li", type, value, parent, number, text, this);
  }
}
