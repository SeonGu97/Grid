"use strict";

import Nav from "../nav/nav.js";
import Aside from "../aside/aside.js";
import Img from "../img/img.js";

export default class Main {
  constructor(generate, type, value, parent, number, text) {
    this.main = new generate(
      "main",
      "main",
      value,
      type,
      parent,
      number,
      text,
      this
    );

    this.img = new Img(
      generate,
      ["class", "src"],
      ["hummingbird", "../image/노력(벌새)로고.png"],
      this.__proto__.elements[0],
      1,
      "",
      this
    );
    this.nav = new Nav(
      generate,
      "",
      "",
      this.__proto__.elements[0],
      1,
      "",
      this
    );
    this.aside = new Aside(
      generate,
      "",
      "",
      this.__proto__.elements[0],
      1,
      "",
      this
    );
  }
}
