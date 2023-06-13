"use strict";

const event = (index, storage_data) => {
  const main = index.main.__proto__.elements[0];
  const menu = index.main.menu.__proto__.elements[0];
  const li = index.main.menu.li.__proto__.elements;

  const liLength = li.length - 1;
  const menuHeight = menu.getBoundingClientRect().height;
  let minLength = 0;

  const scroll = JSON.parse(localStorage.getItem(storage_data[0].key));

  main.addEventListener("mousewheel", (e) => {
    const target = e.target;

    if (minLength < 0) {
      minLength = 0;
    } else if (minLength > liLength) {
      return (minLength = liLength);
    }

    if (scroll[0] == false) {
      if (minLength == 0) {
        minLength = 1;
      }
    } else {
      if (minLength == liLength) {
        minLength = liLength - 1;
      }
    }

    e.deltaY > 0
      ? moveScroll(menu, minLength, scroll, storage_data, false)
      : moveScroll(menu, minLength, scroll, storage_data, true);
  });

  menu.addEventListener("transitionend", (e) => {
    const target = e.target;

    if (scroll[0]) {
      minLength--;
    } else {
      minLength++;
    }
  });
};

export default event;

function moveScroll(menu, minLength, scroll, storage_data, boolean) {
  let height = menu.getBoundingClientRect().height;

  menu.style.transform = `translateY(-${height * minLength}px)`;

  scroll.shift();
  scroll.push(boolean);

  // console.log(minLength);

  localStorage.setItem(storage_data[0].key, JSON.stringify(scroll));
}
