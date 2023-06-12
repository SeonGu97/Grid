"use strict";

export default class Header {
  constructor(generate, type, value, parent, number, text) {
    this.header = new generate(
      "header",
      "header",
      type,
      value,
      parent,
      number,
      text,
      this
    );
  }
}
