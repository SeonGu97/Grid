"use strict";

export default class Section {
  constructor(generate, parent, number, text) {
    this.section = new generate(
      "section",
      "section",
      "",
      "",
      parent,
      number,
      text,
      this
    );
  }
}
