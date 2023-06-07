"use strict";

export default class Main {
  constructor(generate, parent, number, text) {
    this.main = new generate(
      "main",
      "main",
      "",
      "",
      parent,
      number,
      text,
      this
    );
  }
}
