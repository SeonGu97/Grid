"use strict";

export default class Aside {
  constructor(generate, parent, number, text) {
    this.header = new generate(
      "aside",
      "aside",
      "",
      "",
      parent,
      number,
      text,
      this
    );
  }
}
