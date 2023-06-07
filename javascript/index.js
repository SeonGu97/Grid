"use strict";

import Generate from "../generate/generate.js";
const generate = Generate;

import Header from "./header/header.js";
import Nav from "./nav/nav.js";
import Main from "./main/main.js";
import Aside from "./aside/aside.js";
import Footer from "./footer/footer.js";

export default class Index {
  constructor(generate) {
    // name, element, type, value, parent, number, text
    this.header = new Header(generate, document.body, 1, "");
    this.nav = new Nav(generate, document.body, 1, "");
    this.main = new Main(generate, document.body, 1, "");
    this.aside = new Aside(generate, document.body, 1, "");
    this.footer = new Footer(generate, document.body, 1, "");
  }
}

const index = new Index(generate);
