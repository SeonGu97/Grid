"use strict";

export default class Footer {
  constructor(generate, parent, number, text) {
    this.header = new generate(
      "footer",
      "footer",
      "",
      "",
      parent,
      number,
      text,
      this
    );
  }
}
