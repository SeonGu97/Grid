"use strict";

import Logo from "../logo/logo.js";

export default class Section {
  constructor(generate, type, value, parent, number, text) {
    this.section = new generate(
      "section",
      "section",
      type,
      value,
      parent,
      number,
      text,
      this
    );

    this.logo = new Logo(generate, "", "", this.__proto__.elements[0], 1, "");
  }
}
