"use strict";

import Generate from "../generate/generate.js";
const generate = Generate;

import Header from "./header/header.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js";

import Event from "./event/event.js";

import storage from "../storage/storage.js";
import storage_data from "../storage/storage_data.js";

export default class Index {
  constructor(generate) {
    // name, element, type, value, parent, number, text
    this.header = new Header(generate, "", "", document.body, 1, "");
    this.main = new Main(generate, "", "", document.body, 1, "");
    this.footer = new Footer(generate, "", "", document.body, 1, "");
  }
}

const index = new Index(generate);

const scroll = storage(
  storage_data[0].key,
  storage_data[0].value,
  storage_data[0].primary
);

const event = Event(index, storage_data);
