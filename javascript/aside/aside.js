"use strict";

export default class Aside {
  constructor(generate, type, value, parent, number, text) {
    this.aside = new generate(
      "aside",
      "aside",
      type,
      value,
      parent,
      number,
      text,
      this
    );
  }
}
