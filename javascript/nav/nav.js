"use strict";

import UL from "../ul/ul.js";

export default class Nav {
  constructor(generate, type, value, parent, number, text) {
    this.nav = new generate(
      "nav",
      "nav",
      type,
      value,
      parent,
      number,
      text,
      this
    );

    this.ul = new UL(generate, "", "", this.__proto__.elements[0], 6, "");
  }
}
