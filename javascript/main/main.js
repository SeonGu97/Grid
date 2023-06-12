"use strict";

import Menu from "../menu/menu.js";

export default class Main {
  constructor(generate, type, value, parent, number, text) {
    this.main = new generate(
      "main",
      "main",
      type,
      value,
      parent,
      number,
      text,
      this
    );

    this.menu = new Menu(generate, "", "", this.__proto__.elements[0], 1, "");
  }
}
