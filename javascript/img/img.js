"use strict";

export default class Img {
  constructor(generate, type, value, parent, number, text) {
    this.img = new generate(
      "img",
      "img",
      type,
      value,
      parent,
      number,
      text,
      this
    );
  }
}
