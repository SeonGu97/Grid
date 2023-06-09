"use strict";

import Img from "../img/img.js";

export default class Header {
  constructor(generate, type, value, parent, number, text) {
    this.header = new generate(
      "header",
      "header",
      type,
      value,
      parent,
      number,
      text,
      this
    );

    this.img = new Img(
      generate,
      ["class", "src"],
      ["logo", "../image/프로젝트-허밍버드.png"],
      this.__proto__.elements[0],
      1,
      ""
    );
  }
}
