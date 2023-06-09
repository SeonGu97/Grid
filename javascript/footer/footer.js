"use strict";

export default class Footer {
  constructor(generate, type, value, parent, number, text) {
    this.footer = new generate(
      "footer",
      "footer",
      type,
      value,
      parent,
      number,
      text,
      this
    );
  }
}
