"use strict";

import LI from "../li/li.js";

export default class Menu {
  constructor(generate, type, value, parent, number, text) {
    this.menu = new generate(
      "menu",
      "menu",
      type,
      value,
      parent,
      number,
      text,
      this
    );

    this.li = new LI(generate, "", "", this.__proto__.elements[0], 6, "");
  }
}
