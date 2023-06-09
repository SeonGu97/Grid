"use strict";

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
  }
}
