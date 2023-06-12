const storage = (key, value, primary) => {
  if (localStorage.getItem(key) == null) {
    value = [];
    value.push(primary);
  } else {
    value = JSON.parse(localStorage.getItem(key));
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export default storage;
