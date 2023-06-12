"use strict";

const event = (index, storage_data) => {
  const main = index.main.__proto__.elements[0];
  const menu = index.main.menu.__proto__.elements[0];
  const li = index.main.menu.li.__proto__.elements;

  const liLength = li.length - 1;
  const menuHeight = menu.getBoundingClientRect().height;
  let minLength = 1;

  const scroll = JSON.parse(localStorage.getItem(storage_data[0].key));
  console.log(scroll);

  main.addEventListener("mousewheel", (e) => {
    const target = e.target;

    e.deltaY > 0
      ? moveScroll(menu, minLength, scroll, storage_data)
      : moveScroll(menu, minLength, scroll, storage_data);

    if (minLength > liLength) {
      return (minLength = liLength);
    }
  });

  menu.addEventListener("transitionend", (e) => {
    const target = e.target;

    let boolean;

    if (scroll[0]) {
      minLength--;
      boolean = true;
    } else {
      minLength++;
      boolean = false;
    }

    scroll.shift();
    scroll.push(boolean);

    localStorage.setItem(storage_data[0].key, JSON.stringify(scroll));
  });
};

export default event;

function moveScroll(menu, minLength, scroll, storage_data, boolean) {
  let height = menu.getBoundingClientRect().height;

  menu.style.transform = `translateY(-${height * minLength}px)`;
}
