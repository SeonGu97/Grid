"use strict";

export default class Section {
  constructor(generate, type, value, parent, number, text) {
    this.section = new generate(
      "section",
      "section",
      type,
      value,
      parent,
      number,
      text,
      this
    );
  }
}
