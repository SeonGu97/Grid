"use strict";

import Section from "../section/section.js";

export default class Header {
  constructor(generate, parent, number, text) {
    this.header = new generate(
      "header",
      "header",
      "",
      "",
      parent,
      number,
      text,
      this
    );

    this.section = new Section(generate, this.__proto__.elements, 2, "", this);
  }
}
