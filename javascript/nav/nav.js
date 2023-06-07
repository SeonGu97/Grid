"use strict";

export default class Nav {
  constructor(generate, parent, number, text) {
    this.main = new generate("nav", "nav", "", "", parent, number, text, this);
  }
}
